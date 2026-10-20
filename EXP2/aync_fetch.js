const fetchData = async() => {
    try{
        const response = await new Promise(resolve =>
        {
            setTimeout(() => resolve({data: 'User Data Fetched !'}), 1000);
        }
        );
        console.log(response.data);
    } catch(error){
        console.error("Error fetching data:", error)
    }
};

fetchData();