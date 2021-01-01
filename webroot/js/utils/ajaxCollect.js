const ajaxCollect = {
    show(userId,offset){
        let json = {};
        $.post(
            API_SERVER_padEnd("collection/show"), {
                userId,offset
            }, response => {
                json = response;
                // console.log(json)
            });
        return json;
    },collect({userId,videoId}) {
        let json = {};
        $.post(
            API_SERVER_padEnd("collection/add"),{
                userId,videoId,token: utils.getCookie("token")
            },response=>{
                // console.log(collection)
                json = response
                console.log('--------------------')
                console.log(json)
            }
        )
    }
}