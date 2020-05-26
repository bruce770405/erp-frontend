import React from "react";
import { Form, Grid, Divider } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

let OrderForm = (props) => {


  const { handleSubmit, reset } = props;


  return (
    <div style={{ padding: '40px' }}>

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

        </Form.Group>

        <Grid>
          <Grid.Column width={7}>
            <Field
              component={Form.Input}
              label="報價"
              name="amount"
              placeholder="請輸入金額"
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Form.Group inline style={{ paddingTop: '30px', paddingLeft: '30px' }}>
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
          </Grid.Column>
        </Grid>

        <Divider hidden/>

        <Field
          component={renderTextArea}
          label="備註"
          name="about"
          placeholder="簡述其他備註事項.."
        />

        <Grid textAlign='center' style={{ paddingTop: '40px' }}>
          <Form.Group inline>
            <Form.Button primary size='big' onClick={handleSubmit}>儲存</Form.Button>
            <Form.Button size='big' onClick={reset}>清除</Form.Button>
          </Form.Group>
        </Grid>

      </Form>

    </div>
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
    checked={field.input.value === field.radioValue}
    label={field.label}
    name={field.input.name}
    onChange={(e, { checked }) => field.input.onChange(field.radioValue)}
  />
);