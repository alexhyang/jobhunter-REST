import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormValues } from "./interfaces";
import { TextField, SelectField, TextArea } from "./formComponents";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const TYPE_OPTIONS = [
  { id: 1, value: "Full-time", label: "Full Time" },
  { id: 2, value: "Part-time", label: "Part Time" },
  { id: 3, value: "Remote", label: "Remote" },
  { id: 4, value: "Temporary", label: "Temporary" },
  { id: 5, value: "Contract", label: "Contract" },
  { id: 6, value: "Internship", label: "Internship" },
  { id: 7, value: "Co-op", label: "Co-op" },
  { id: 8, value: "Other", label: "Other" },
];

const LEVEL_OPTIONS = [
  { id: 1, value: "Unknown", label: "Unknown" },
  { id: 2, value: "Junior", label: "Junior (< 3 yrs)" },
  { id: 3, value: "Intermediate", label: "Intermediate (3 ~ 5 yrs)" },
  { id: 4, value: "Senior", label: "Senior(> 5 yrs)" },
  { id: 5, value: "Intern", label: "Intern" },
  { id: 6, value: "Other", label: "Other" },
];

export default function PostingForm() {
  const { control, handleSubmit } = useForm<IFormValues>();
  const [data, setData] = useState<string>("");
  const onSubmit: SubmitHandler<IFormValues> = (data) =>
    setData(JSON.stringify(data));

  return (
    <Form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
      <TextField name="url" control={control} required={true} />
      <Row className="mb-3">
        <TextField
          name="position"
          control={control}
          required={true}
          asCol={true}
        />
        <TextField
          name="company"
          control={control}
          required={true}
          asCol={true}
        />
        <TextField
          name="location"
          control={control}
          required={true}
          asCol={true}
        />
      </Row>

      <Row className="mb-3">
        <SelectField
          name="type"
          control={control}
          required={true}
          options={TYPE_OPTIONS}
          asCol={true}
        />
        <SelectField
          name="level"
          control={control}
          required={true}
          options={LEVEL_OPTIONS}
          asCol={true}
        />
        <TextField
          name="due_date"
          type="date"
          control={control}
          required={true}
          asCol={true}
        />
      </Row>
      <TextArea name="responsibilities" control={control} required={true} />
      <TextArea name="qualifications" control={control} required={true} />
      <TextField name="other" control={control} />

      <p>{data}</p>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
