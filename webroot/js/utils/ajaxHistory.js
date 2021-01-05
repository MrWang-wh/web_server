const ajaxHistory = {
    show(userId,offset){
        let json = {};
        $.post(
            API_SERVER_padEnd("history/show"), {
                userId,offset
            }, response => {
                json = response;
                // console.log(json)
            });
        return json;
    },add({userId,videoId}) {
        let json = {};
        $.post(
            API_SERVER_padEnd("history/add"),{
                userId,videoId,token: utils.getCookie("token")
            },response=>{
                // console.log(collection)
                json = response
                console.log('--------------------')
                console.log(json)
            }
        )
    },delete({userId,videoId}) {
        let json = {};
        $.post(
            API_SERVER_padEnd("history/delete"),{
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