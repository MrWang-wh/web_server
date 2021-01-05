/* created at 2018/4/12 by BlueSky @cilicili */

const ajaxUpload = {
  upload(data) {
    let json = {};
    // this.$Loading.start()
    $.ajax({
      url: `${UPLOAD_SERVER}/test/upload/${utils.getCookie('apply')}`
      , data
      , type: 'POST'
      , encType: 'multipart/form-data'
      , processData: false
      , contentType: false
      , cache: false
      , success(response) {
        // this.$Loading.finish()
        json = response;
      }
      ,error(){
        // this.$Loading.error()
      }
    });
    return json;
  }
};