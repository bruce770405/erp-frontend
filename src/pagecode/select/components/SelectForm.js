import React, { Fragment } from "react";
import { Form, Icon, Grid } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { DateInput } from 'semantic-ui-calendar-react';

const SelectForm = (props) => {


  const { handleSubmit, reset } = props;
  return (
    <div style={{ padding: '40px' }}>
      <Fragment>

        <Form onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Field
              component={Form.Input}
              label="訂單編號"
              name="orderId"
              placeholder="編號"
            />
            <Field
              component={Form.Input}
              label="客戶姓名"
              name="custName"
              placeholder="姓名"
            />
            <Field
              component={Form.Input}
              label="聯絡電話"
              name="phone"
              placeholder="ex：0423916552"
            />

          </Form.Group>

          <Form.Group widths="equal">
            <Field name="startDate" component={field =>
              <DateInput
                label="送修收件日"
                clearable
                clearIcon={<Icon name="remove" color="red" />}
                name="startDate"
                dateFormat="YYYY/MM/DD"
                placeholder="YYYY/MM/DD"
                iconPosition="left"
                maxDate={new Date()}
                value={field.input.value}
                onChange={(e, { value }) => field.input.onChange(value)}
              />
            }
            />
            <Field name="endDate" component={field =>
              <DateInput
                label="維修完成日"
                clearable
                clearIcon={<Icon name="remove" color="red" />}
                name="endDate"
                dateFormat="YYYY/MM/DD"
                placeholder="YYYY/MM/DD"
                iconPosition="left"
                maxDate={new Date()}
                value={field.input.value}
                onChange={(e, { value }) => field.input.onChange(value)}
              />
            }
            />
            <Field
              component={renderSelect}
              label="狀態"
              name="status"
              options={[
                { key: "8", text: "收件", value: "8" },
                { key: "1", text: "維修中", value: "1" },
                { key: "2", text: "維修完成", value: "2" },
                { key: "0", text: "取件", value: "0" },
                { key: "-1", text: "報價不修", value: "-1" },
              ]}
              placeholder="狀態"
            />
          </Form.Group>

          <Grid textAlign='center' style={{ paddingTop: '20px' }}>
            <Form.Group inline>
              <Form.Button primary size='big' onClick={reset}>查詢</Form.Button>
              <Form.Button size='big' onClick={reset}>清除</Form.Button>
            </Form.Group>
          </Grid>

        </Form>
      </Fragment>

    </div>
  )
}

export default reduxForm({
  form: "select"
})(SelectForm);

const renderSelect = field => (
  <Form.Select
    label={field.label}
    name={field.input.name}
    onChange={(e, { value }) => field.input.onChange(value)}
    options={field.options}
    placeholder={field.placeholder}
    value={field.input.value}
  />
);
