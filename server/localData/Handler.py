import json
import re


class Handler:
    def __init__(self, file_name) -> None:
        self.raw_data = json.load(open(file_name, "r", encoding="utf-8"))
        self.converted_data = []

    def generate_reformatted_json(self, new_file_name) -> None:
        """reformat values of responsibilities, qualifications, and skills raw data (as dict) to"""
        if self.converted_data == []:
            print("Processing...")
            self.reformat_values()
        print("Writing new file...")
        with open(new_file_name, "w") as f:
            json.dump(self.converted_data, f)

    def reformat_values(self) -> None:
        for i in range(0, len(self.raw_data)):
            posting = self.raw_data[i]
            new_posting = {**posting}

            # reformat responsibilities, qualifications, and skills
            # str -> str[]
            new_posting["responsibilities"] = self.HTML_to_list(
                posting["responsibilities"]
            )
            new_posting["qualifications"] = self.HTML_to_list(posting["qualifications"])
            new_posting["skills"] = posting["skills"].split(", ")

            # reformat types
            # str -> str[], capitalize
            new_posting["type"] = [
                type.capitalize()
                for type in posting["type"][1:-1].replace("'", "").split(", ")
            ]

            self.converted_data.append(new_posting)

        # sort and reassign _id for postings
        self.converted_data.sort(key=lambda posting: posting["id"])
        for i in range(0, len(self.converted_data)):
            self.converted_data[i]["_id"] = i + 1
            del self.converted_data[i]["id"]


    def HTML_to_list(self, innerHTML) -> list:
        return re.split("\\s+\\<br\\>\r\n-\\s+", re.sub("- ", "", innerHTML, 1))


if __name__ == "__main__":
    source_file = input("Enter source file: ")
    target_file = input("Enter target file: ")
    handler = Handler(source_file)
    handler.generate_reformatted_json(target_file)
