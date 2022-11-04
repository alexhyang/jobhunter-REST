import json
import re

class Handler:
    def __init__(self, file_name) -> None:
        self.raw_data = json.load(open(file_name, 'r', encoding='utf-8'))
        self.converted_data = []

    def generate_reformatted_json(self, new_file_name) -> None:
        """reformat values of responsibilities, qualifications, and skills raw data (as dict) to """
        if self.converted_data == []:
            self.reformat_values()
        with open(new_file_name, 'w') as f:
            json.dump(self.converted_data, f)

    def reformat_values(self) -> None:
        for posting in self.raw_data:
            new_posting = {**posting}
            new_posting["responsibilities"] = self.HTML_to_list(
                posting["responsibilities"])
            new_posting["qualifications"] = self.HTML_to_list(
                posting["qualifications"])
            new_posting["skills"] = posting["skills"].split(', ')
            self.converted_data.append(new_posting)
        # print(self.converted_data)

    def HTML_to_list(self, innerHTML) -> list:
        return re.split('\s+\<br\>\r\n-\s+', re.sub('- ', "", innerHTML, 1))


if __name__ == "__main__":
    handler = Handler("fetch_all_postings.json")
    handler.generate_reformatted_json('all_postings.json')
