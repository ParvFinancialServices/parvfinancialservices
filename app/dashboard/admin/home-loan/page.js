'use client'
import { db } from '@/lib/firebaseConfig';
// import db from '@/lib/firestore';
import { useEffect, useState } from 'react';
// import { db } from '../firebase';

const HomeLoanList = () => {
    const [data, setData] = useState([]);
    console.log(data);


    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await db.collection('personal_loans').get();
            const items = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setData(items);
        };

        fetchData();
    }, []);
    return (
        <div>
            Hime page list
        </div>
    )
}
export default HomeLoanList;