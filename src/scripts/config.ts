const baseApiURL = "http://localhost:3000/articles";
const limit: number = 5;
let currentPage: number = 1;
let currentNumberOfPages: number;
let currentCategories: string[];
let currentTags: string[];
export default {
    baseApiURL,
    limit,
    currentPage,
    currentNumberOfPages,
    currentCategories,
    currentTags
};