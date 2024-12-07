import Image from 'next/image'
import emailLogo from '@/assets/logos/Email.png'
import phoneLogo from '@/assets/logos/Phone.png'
import mapLogo from '@/assets/logos/MapMarker.png'
import bgImage from '@/assets/contact-form-bg.jpg'

const ContactForm = () => {
  return (
    <section className="bg-[#0A377D] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}>

      <div className="flex flex-col md:flex-row justify-evenly gap-4 text-white py-20 px-4 max-w-screen-xl m-auto">
        {/* Left Section */}
        <div className="flex flex-col gap-4 pt-6 max-w-md">
          <h2 className="text-2xl font-bold">Let’s Connect with us</h2>
          <p className="text-sm">
            Elevate your digital presence with Tecorbitron. Contact us to discuss your website, app, cloud, or any other digital platform project now.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Image src={phoneLogo} height={40} width={40} alt='logo' />
              <div>
                <p>(+91) 908 480 0496</p>
                <p>(+91) 863 011 0496</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Image src={emailLogo} height={40} width={40} alt='logo' />
              <div>
                <p>info@tecorbitron.com</p>
                <p>www.tecorbitron.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Image src={mapLogo} height={40} width={40} alt='logo' />
              <div>
                <p>F9, Angel Mega Mall, Ghaziabad</p>
                <p>Uttar Pradesh, India, 201010</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-[#EDF8FF]/10 p-6 rounded-2xl shadow-md w-full max-w-md">
          <h3 className="text-3xl text-white italic font-bold mb-4 ">Get In Touch !</h3>
          <p className='text-white text-sm mb-8'>Contact us now, and our team will deliver a prompt, personable, and insightful reply.</p>
          <form className="flex flex-col gap-4 text-white">
            <input
              type="text"
              placeholder="Name"
              className=" rounded-md p-4 px-5 focus:outline-none bg-white/30 placeholder-white "
            />
            <input
              type="email"
              placeholder="Email"
              className=" rounded-md p-4 px-5 focus:outline-none bg-white/30 placeholder-white "
            />
            <input
              type="tel"
              placeholder="Phone"
              className=" rounded-md p-4 px-5 focus:outline-none bg-white/30 placeholder-white "
            />
            <textarea
              placeholder="Message"
              className=" rounded-md p-2 h-24 px-5 focus:outline-none bg-white/30 placeholder-white "
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600/40 text-white py-2 px-4 rounded-md hover:bg-malachite"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>

  );
};

export default ContactForm;
