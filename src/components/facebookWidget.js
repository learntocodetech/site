import React from 'react'

const FacebookWidget = () => {
    return (<iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLearntoCode.tech%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=241987553372668"
                width="340" 
                height="400" 
                style={{border: "none", overFlow: "hidden"}} 
                scrolling="no" 
                frameborder="0"
                allowTransparency="true" 
                allow="encrypted-media">
            </iframe>)
}

export default FacebookWidget