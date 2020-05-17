import React, { Fragment } from "react";
import { Form, Message, Icon, Grid } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import ReactToPrint from 'react-to-print';
import { DateInput } from 'semantic-ui-calendar-react';
import { connect } from "react-redux";

let OrderForm = (props) => {


  const { orderId, handleSubmit, reset, componentRef } = props;


  return (

    <Fragment>
      <div style={{ padding: '40px' }}>
        <Message info>
          <p>
            維修單號: {orderId}
          </p>
        </Message>

        <Form>
          <Form.Group widths="equal">
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
            <Field label="送修時間" name="date" component={field =>
              <DateInput
                label="送修時間"
                clearable
                clearIcon={<Icon name="remove" color="red" />}
                name={field.input.name}
                dateFormat="YYYY/MM/DD"
                placeholder="YYYY/MM/DD"
                iconPosition="left"
                value={field.input.value}
                onChange={(e, { value }) => field.input.onChange(value)}
              />
            }
            />
            <Field
              component={renderSelect}
              label="性別"
              name="gender"
              options={[
                { key: "m", text: "男", value: "male" },
                { key: "f", text: "女", value: "female" }
              ]}
              placeholder="Gender"
            />
            <Field
              component={Form.Input}
              label="機型"
              name="device"
              placeholder="ex：Iphone 6s"
            />
            <Field
              component={Form.Input}
              label="設備顏色"
              name="deviceColor"
              placeholder="請輸入顏色"
            />

          </Form.Group>

          <Form.Group widths="equal">
            <Field
              component={Form.Input}
              label="解鎖密碼"
              name="pin"
              placeholder="****"
            />
            <Field
              component={Form.Input}
              label="IMEI(序號)"
              name="imei"
              placeholder="請輸入IMEI">
            </Field>
            <Field
              component={Form.Input}
              label="維修故障"
              name="maintain"
              placeholder="請輸入維修故障事由"
            />
            <Field
              component={Form.Input}
              label="報價"
              name="amount"
              placeholder="請輸入金額"
            />
          </Form.Group>

          <Form.Group inline>
            <label>客戶關係</label>

            <Field
              component={renderRadio}
              label="陌生拜訪"
              name="quantity"
              radioValue={1}
            />
            <Field
              component={renderRadio}
              label="親友介紹"
              name="quantity"
              radioValue={2}
            />
            <Field
              component={renderRadio}
              label="宣傳活動"
              name="quantity"
              radioValue={3}
            />
            <Field
              component={renderRadio}
              label="其他"
              name="quantity"
              radioValue={4}
            />
          </Form.Group>

          <Field
            component={renderTextArea}
            label="備註"
            name="about"
            placeholder="Tell us more about you..."
          />

          <Grid textAlign='center' style={{ paddingTop: '40px' }}>
            <Form.Group inline>
              <Form.Button primary onClick={handleSubmit}>儲存</Form.Button>
              < ReactToPrint
                trigger={() => <Form.Button color='red'>列印維修單</Form.Button>}
                content={() => componentRef.current}
              />
              <Form.Button onClick={reset}>清除</Form.Button>
            </Form.Group>
          </Grid>

        </Form>

      </div>
    </Fragment>
  )
}

/**
 * 連結畫面資料進store.
 */
OrderForm = reduxForm({
  form: "order"
})(OrderForm);

/**
 * init form values.
 */
OrderForm = connect(state => ({
  initialValues: { custName: '', phone: '' }
}))(OrderForm);

export default OrderForm

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

const renderTextArea = field => (
  <Form.TextArea
    {...field.input}
    label={field.label}
    placeholder={field.placeholder}
  />
);

const renderCheckbox = field => (
  <Form.Checkbox
    checked={!!field.input.value}
    name={field.input.name}
    label={field.label}
    onChange={(e, { checked }) => field.input.onChange(checked)}
  />
);

const renderRadio = field => (
  <Form.Radio
    checked={field.input.value === field.radioValue}
    label={field.label}
    name={field.input.name}
    onChange={(e, { checked }) => field.input.onChange(field.radioValue)}
  />
);