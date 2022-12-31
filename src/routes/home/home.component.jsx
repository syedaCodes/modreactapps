import Directory from '../../components/directory/directory.component';

const Home = () => {
    
    const categories = [
        { 
            id: 1,
            title: 'Hats',
            imageURL: 'https://i.ibb.co/cvpntL1/hats.png'
        },
        { 
            id: 2,
            title: 'Jackets',
            imageURL: 'https://i.ibb.co/px2tCc3/jackets.png'
        },
        { 
            id: 3,
            title: 'Sneakers',
            imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png'
        },
        {
            id: 4,
            title: 'Womens',
            imageURL: 'https://i.ibb.co/GCCdy8t/womens.png'
        },
        { 
            id: 5,
            title: 'Mens',
            imageURL: 'https://i.ibb.co/R70vBrQ/men.png'
        }
    ]

    return(
        <Directory categories={categories}/>
    )
}

export default Home;