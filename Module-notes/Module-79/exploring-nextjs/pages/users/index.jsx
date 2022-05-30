import Link from 'next/link';
import React from 'react';

const index = ({users}) => {
    return (
        <div>
            <h2>All Users Main Page {users.length}</h2>
            {
                users.map(user => <div key={user.id}>
                    <h4>Name: {user.name}
                        <Link href={`/users/${user.id}`}>
                            <button style={{marginRight:20}}>explore</button>
                        </Link>
                    </h4>
                </div>)
            }
        </div>
    );
};

export default index;

export async function getStaticProps(context) {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const res = await fetch(url);
    const data = await res.json();

    return {
      props: {users:data}, // will be passed to the page component as props
    }
  }