import Layout from "./../components/Layout";

const TestCat = (props) => {
    return (    
        <Layout menu={props.menu}>
            <h2>Cat at random</h2>
            <img src={ `https://cataas.com${props.cat.url}` } />
        </Layout>
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