import React from "react";
import { Form, Grid, Divider, Header } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

let OrderForm = (props) => {


  const { handleSubmit, reset } = props;

  /**
   * 修飾form的submit事件.
   * @param {*} e 
   */
  const handleReset = (e) => {
    e.preventDefault();
    reset();
  }

  return (
    <Form>
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
        name="color"
        placeholder="請輸入顏色"
      />
      <Field
        component={Form.Input}
        label="解鎖密碼"
        name="devicePin"
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
        name="errorDesc"
        placeholder="請輸入維修故障事由"
      />
      <Field
        component={Form.Input}
        label="報價"
        name="fixAmount"
        placeholder="請輸入金額"
      />
      <Header as="h5">客戶關係</Header>
      <Form.Group inline style={{ paddingLeft: '30px' }}>
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

      <Divider hidden />

      <Field
        component={renderTextArea}
        label="備註"
        name="memo"
        placeholder="簡述其他備註事項.."
      />

      <Grid textAlign='center' style={{ paddingTop: '40px' }}>
        <Form.Group inline>
          <Form.Button primary onClick={handleSubmit}><i className="save outline left icon"></i>儲存</Form.Button>
          <Form.Button onClick={handleReset}><i className="redo left icon"></i>清除</Form.Button>
        </Form.Group>
      </Grid>

    </Form>
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


//  create
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

// const renderCheckbox = field => (
//   <Form.Checkbox
//     checked={!!field.input.value}
//     name={field.input.name}
//     label={field.label}
//     onChange={(e, { checked }) => field.input.onChange(checked)}
//   />
// );

const renderRadio = field => (
  <Form.Radio
    toggle
    checked={field.input.value === field.radioValue}
    label={field.label}
    name={field.input.name}
    onChange={(e, { checked }) => field.input.onChange(field.radioValue)}
  />
);