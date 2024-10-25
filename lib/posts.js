// const fs = require('fs');
// const path = require('path');
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
    // отримання імен файлів у теці posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, "")
        // зчитування розмітки із файлу як рядок
        const fullPath = path.join(postsDirectory, fileName);
        const fileContent = fs.readFileSync(fullPath, 'utf8');
        //використання gray-matter для парсингу мета-даних із файлів
        const matterResult = matter(fileContent);
        return {
            id,
            // content: matterResult.content,
            ...matterResult.data
        }
    })
    return allPostsData.sort((a,b)=>{
        if(a.date < b.date){
            return 1;
        }else{
            return -1;
        }
    })
}

export function getAllPostsIds(){
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, "")
            }
        }
    })
}
// [
//     {params: {id: 'copy'}},
//     {params: {id: 'pre-rendering'}},
//     {params: {id: 'ssg-ssr'}},
// ]

export async function getPostData(id){
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    return {
        id,
        ...matterResult.data
    }
}