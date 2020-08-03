/**
 *  label='維修中'
    label='維修完成'
    label='取件'
    label='報價不修'
 * @param {*} statusName 
 */
export const orderStatusParser2Code = (statusName) => {
  switch (statusName) {
    case '收件':
      return '8';
    case '維修中':
      return '1';
    case '取件':
      return '0';
    case '報價不修':
      return '-1';
  }
}