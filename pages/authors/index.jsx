import AuthorsCard from "../../components/AuthorsCard"
import Layout from "../../components/Layout"

export default function Authors({ users }) {
    console.log(users)
    return (
        <Layout title="Authors Page">
            <section id="hero-authors">
                <p>Authors</p>
            </section>
            <div className="container mt-5">
                <div className="row">
                    <AuthorsCard />
                    <AuthorsCard />
                    <AuthorsCard />
                    <AuthorsCard />
                    <AuthorsCard />
                    <AuthorsCard />
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(){
    const users = await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(result => result).catch(() => console.log('error cok'))

    return {
        props: {
            users
        }
    }
}
