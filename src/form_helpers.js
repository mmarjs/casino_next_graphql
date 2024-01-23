import moment from 'moment-timezone';

export const formatBodyData = (data) => {
    const keys = Object.keys(data);

    let formatedData = {};
    keys.forEach((key, index) => {
        const field = key;
        const value = data[key];

        if(Array.isArray(value)){
            formatedData[field] = [];
            if(value.length > 0){

                value.map((item)=>{
                    if(item){
                        if(typeof item === "object"){
                            if(item.value){
                                formatedData[field].push(item.value) 
                            }
                        }else if(typeof item === "string"){
                            formatedData[field].push(item) 
                        }
                    }
                })
                
            }
        }
        else if(typeof value === "object"){
            if(moment.isMoment(value)){
                formatedData[field] = moment(value).format("YYYY-MM-DD")
            }
            else if(value.value){
                formatedData[field] = value.value;
            }
        }else if(typeof value === "string"){
            formatedData[field] = value;
        }
    });

    return formatedData;
}
