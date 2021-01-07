
const useUser = () => {
    const getCurrentUser = () => {
        return {id: 1}
    }
    
    return { getCurrentUser }
}

export default useUser