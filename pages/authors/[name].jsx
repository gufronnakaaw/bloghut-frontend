import Link from 'next/link'
import { useRouter } from 'next/router'
import Cards from '../../components/Cards'
import Layout from '../../components/Layout'

export default function Author() {
    const router = useRouter()
    const { name } = router.query

    const posts = [
        {
            author: 'gufronnakaaw',
            createdAt: 'Feb, 20 Jan 2021',
            img: '/img/typing2.jpg',
            slug: 'how-to-be-javascript-developer',
            title: 'How To Be Javascript Developer'
        },
        {
            author: 'sherlynagstn',
            createdAt: 'Feb, 20 Jan 2021',
            img: '/img/typing3.jpg',
            slug: 'how-to-be-golang-developer',
            title: 'How To Be Golang Developer'
        },
        {
            author: 'sherlynagstn',
            createdAt: 'Feb, 20 Jan 2021',
            img: '/img/typing3.jpg',
            slug: 'how-to-be-golang-developer',
            title: 'How To Be Golang Developer'
        },
    ]

    return (
        <Layout title={name}>
            <div className="container" style={{ marginTop: '110px' }}>
                <div className="text-center">
                    <img src="/img/avatar1.png" alt="" className="rounded-circle" style={{ width: '180px', height: '180px'}}/>

                    <h1 className="mt-4">{name}</h1>
                    <p>Backend Developer</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga accusamus velit laborum voluptas iure aperiam reiciendis temporibus dicta, quod ea quo debitis corrupti, earum reprehenderit optio aliquam consequatur aliquid similique! Quos, quae. Quisquam quidem doloremque tempore, minus maiores quo vel et velit iste consectetur sed. Quod eveniet repellat natus impedit.</p>
                </div>
                <div style={{ marginTop: '100px' }}>
                    <div className="row">
                        {
                            posts.map((post, index) => {
                                return <Cards key={index} {...post}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}
