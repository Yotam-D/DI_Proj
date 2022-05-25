export const handleDelete = (post_id) => {
    return {
        type: "DELETE",
        payload: post_id,
    }
}