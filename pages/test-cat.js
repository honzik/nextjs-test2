const TestCat = (props) => {
    return (    
        <div>
            <img src={ `https://cataas.com${props.cat.url}` } />
        </div>    
    );
};

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://cataas.com/cat?json=true`)
    const cat_data = await res.json()

    // Pass data to the page via props
    return { props: { cat: cat_data } }
}

export default TestCat;