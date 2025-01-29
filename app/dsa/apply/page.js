import SignUpForm from '@/comp/dsa/DSASignUPForm';
import ApplyPage from '@/comp/dsa/FormPage';
import Footer from '@/comp/Home/Footer';
import NavbarNew from '@/comp/Navbar/Navbar';


const ApplyForDSA = () => {
    return (
        <div>
            <NavbarNew />
            <main className='mt-[4.5rem]'>
                <ApplyPage />
            </main>
            <Footer />
        </div>

    )
}

export default ApplyForDSA;