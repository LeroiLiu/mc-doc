/**
 *
 * @param data_s
 * @param type
 */
export function sortVersion(data_s: any[],type='') {
  try{
    return data_s.map(function (data){
      return data.split('.');
    }).sort((a, b) => {
      if (type==='desc'){
        return b[0] - a[0] || b[1] - a[1] || b[2] - a[2] || b[3] - a[3] || b[4] - a[4] || b[5] - a[5] || b[6] - a[6] || b[7] - a[7];
      }else{
        return a[0] - b[0] || a[1] - b[1] || a[2] - b[2] || a[3] - b[3] || a[4] - b[4] || a[5] - b[5] || a[6] - b[6] || a[7] - b[7];
      }
    }).map(function (data){
      return data.join('.')
    })
  }catch (e) {
    return data_s;
  }
}
