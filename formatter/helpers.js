export const formatImageObject = function(obj){

    let data = null;
    if(obj && obj.data && obj.data.attributes && obj.data.attributes.url){
        data = {
            url:`${obj.data.attributes.url}`,
            width:obj.data.attributes.width,
            height:obj.data.attributes.height 
        }
    }

    return data;
}



export const formatImagesArray = function(items){

    let data = [];
    items && items.data.map((item)=>{
        data.push({
            url:`${item.attributes.url}`,
            width:item.attributes.width,
            height:item.attributes.height 
        })
    })

    return data;
}



export const formatList = function(items){

    let list = [];
    items && items.data.map((item)=>{

        let newItem = {};

        if(item && item.attributes){
            let attributes = item.attributes;
            for (const [key, value] of Object.entries(attributes)) {
                if(typeof attributes[key] === 'object' && attributes[key] !== null){
                    if(attributes[key].hasOwnProperty('data')){
                        if(attributes[key].data.hasOwnProperty('attributes')){
                            newItem[key] = {...attributes[key].data.attributes}
                        }
                    }
                }else{
                    newItem[key] = value;
                }
            }
        }

        list.push({
            ...newItem
        });
    });

    return list;
}

export const formatSeoObject = function(data,path){

    return {
        title: data.meta_title?data.meta_title:process.env.NEXT_PUBLIC_DEFAULT_META_TITLE,
        description: data.meta_description?data.meta_description:process.env.NEXT_PUBLIC_DEFAULT_META_DESCRIPTION,
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${path}`,
        open_graph: {
            canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${path}`,
          title: data.meta_title?data.meta_title:process.env.NEXT_PUBLIC_DEFAULT_META_TITLE,
          description: data.meta_description?data.meta_description:process.env.NEXT_PUBLIC_DEFAULT_META_DESCRIPTION,
          images: [
            {
              url: data.meta_image?data.meta_image.url:`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_DEFAULT_META_IMAGE}`,
              width: data.meta_image?data.meta_image.width:1000,
              height: data.meta_image?data.meta_image.height:1000,
              alt: data.meta_title?data.meta_title:process.env.NEXT_PUBLIC_DEFAULT_META_TITLE,
            },
          ],
          site_name: process.env.NEXT_PUBLIC_SITE_NAME,
        }
    }

}