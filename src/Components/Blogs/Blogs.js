import React from 'react';
import { blogArray } from './blogData';
import BlogItem from './BlogItem';

const Blogs = () => {
  return (
    <div className={styles.backgroundDiv}>
      <section className={styles.centerDiv}>
        <div className={styles.textDiv}>
          <h1 className={styles.blogTitle}>Here are some of my blogs:</h1>
          <div className={styles.imageCenter}></div>

          <div class="m-3">
            {blogArray.map(({ id, src, title, description }) => (
              <BlogItem
                key={id}
                src={src}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  backgroundDiv: 'bg-white dark:bg-gray-600',
  centerDiv:
    'max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 bg-white dark:bg-gray-600',
  textDiv: 'text-center pb-12',
  blogTitle:
    'font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 dark:text-white font-Poppins',
  imageCenter: 'flex justify-center',
  blogImage: 'object-center h-60',
};

export default Blogs;
