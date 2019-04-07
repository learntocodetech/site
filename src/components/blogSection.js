import React from 'react'
import SectionDivider from './sectionDivider'

const BlogSection = () => {
    return (<section className="blog-section">
                <SectionDivider label="Guides" />
                <div className="blog-grid">
                    <div className="blog-item">
                        <img src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png" />
                    </div>
                
                    <div className="blog-item">
                        <img src="http://austinjavascript.com/wp-content/uploads/2012/11/thanksgiving.js-400x400.png" />
                    </div>
                    <div className="blog-item">
                        <img src="https://storage.googleapis.com/deepmind-live-cms/images/DM_Blog_Post_Image_20170314_2%2520%25282%2529_.2e16d0ba.fill-400x400_jBKTiCp.png" />
                    </div>
                    <div className="blog-item">
                        <img src="https://corevalue.net/wp-content/uploads/2016/04/9d19310763171b0d958d23a18b3d7e1c_400x400.png" />
                    </div>
                </div>
            </section>)
}

export default BlogSection