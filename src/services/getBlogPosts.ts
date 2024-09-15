"use client";

const getBlogPosts = async () => {
  try {
    const res = await fetch('/api/blogs', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json();
    return data;
  } catch (err: any) {
    console.error('Error fetching blog posts:', err);
    return null; // Or handle error state appropriately
  }
};

export default getBlogPosts;
