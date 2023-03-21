export const createSlug = (String) => {
    const slug = String.toLowerCase().replace(/[^\w]/g, "_");
    return slug;
}