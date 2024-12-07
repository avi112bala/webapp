import React from 'react'

const TermsAndConditions = () => {
    return (
        <div className="w-full md:w-4/5 mx-auto px-4 my-[130px] text-rich-black">
            <h1 className="text-3xl md:text-4xl  mb-5 text-prussion-blue">Terms and Conditions</h1>

            <p className="mb-5">
                Welcome to our website! By accessing or using this website, you agree to
                comply with and be bound by the following terms and conditions. Please
                read them carefully.
            </p>

            {/* Introduction */}
            <h2 className="text-2xl mt-10 mb-4 text-prussion-blue">Introduction</h2>
            <p className="mb-4">
                Welcome to Tecorbitron (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). These Terms and Conditions (&quot;Terms&quot;,
                &quot;Terms and Conditions&quot;) govern your use of the Tecorbitron software and consultation services
                (the &quot;Service&quot;) provided by Tecorbitron. By accessing or using our Service, you agree to be bound
                by these Terms. If you do not agree with any part of these Terms, you may not access the Service.
            </p>

            {/* Acceptance of Terms */}
            <h2 className="text-2xl mt-10 mb-4 text-prussion-blue">Acceptance of Terms</h2>
            <p className="mb-4">
                By accessing or using the Service, you confirm that you are at least 18 years old, or the legal age
                of majority in your jurisdiction, and that you have the legal capacity to enter into a binding
                contract. If you are using the Service on behalf of an organization, you agree to these Terms on
                behalf of that organization and warrant that you have the authority to bind the organization to
                these Terms.
            </p>

            {/* User Accounts and Registration */}
            <h2 className="text-2xl mt-10 mb-4 text-prussion-blue">User Accounts and Registration</h2>
            <p className='my-2' ># Account Creation</p>
            <p className='my-2' >To access certain features of the Service, you may be required to create an account. You agree to:</p>
            <ol className="list-decimal list-inside">
                <li className='my-2' >Provide accurate, current, and complete information during the registration process;</li>
                <li className='my-2' >Maintain and promptly update your account information to keep it accurate, current, and
                    complete;</li>
                <li className='my-2' >Protect the confidentiality of your login credentials and restrict access to your account;</li>
                <li className='my-2' >Notify us immediately of any unauthorized use of your account or any other breach of security.</li>
            </ol>
            <p className='my-2' ># Account Termination</p>
            <p className="mb-4">
                We reserve the right to suspend or terminate your account, without notice, if we believe that you
                have violated these Terms or if we believe your actions may cause legal liability or disrupt others&apos;
                use of the Service.
            </p>

            {/* Software License */}
            <h2 className="text-2xl mt-10 mb-4 text-prussion-blue">Software License</h2>
            <p className='my-2' ># License Grant</p>
            <p className='my-2' >Tecorbitron grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Service, including any software provided as part of the Service, strictly in accordance with these Terms.</p>
            <p className='my-2' ># License Restrictions</p>
            <p className='my-2' >You agree not to:</p>
            <ol className="list-decimal list-inside mb-4">
                <li className='my-2' >Modify, alter, reproduce, distribute, or create derivative works of the Service;</li>
                <li className='my-2' > Reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code of
                    the Service;</li>
                <li className='my-2' >Use the Service for any commercial purposes without obtaining a license to do so from
                    Tecorbitron;</li>
                <li className='my-2' >Remove or alter any proprietary notices or labels on the Service;</li>
                <li className='my-2' >Use the Service in any manner that could damage, disable, overburden, or impair Tecorbitron&apos;s systems or interfere with any other party&apos;s use of the Service.</li>
            </ol>

            {/* User Conduct  */}
            <h2 className="text-2xl mt-10 mb-4 text-prussion-blue">User Conduct</h2>
            <p className='my-2' ># Prohibited Activities</p>
            <p className='my-2' >You agree not to use the Service to:</p>
            <ol className="list-decimal list-inside">
                <li className='my-2' >Engage in any illegal activities or promote any illegal activities;</li>
                <li className='my-2' >Upload, post, email, or otherwise transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, libelous, or otherwise objectionable;</li>
                <li className='my-2' > Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity;</li>
                <li className='my-2' >Transmit any material that contains viruses, Trojan horses, worms, time bombs, or any other harmful or deleterious programs;</li>
                <li className='my-2' >Collect or store personal data about other users without their consent; </li>
                <li className='my-2' >Engage in spamming, phishing, or other unsolicited messaging activities.</li>
            </ol>
            <p className='my-2' ># User Content</p>
            <p className="mb-4">
                You retain ownership of any content you submit, post, or display on or through the Service (&quot;User Content&quot;). By submitting, posting, or displaying User Content, you grant Tecorbitron a worldwide, non-exclusive, royalty-free license to use, display, reproduce, modify, create derivative works of, and distribute your User Content in connection with operating and providing the Service.
            </p>

            {/*  Intellectual Property  */}
            <h2 className="text-2xl mt-10 mb-4 text-prussion-blue">Intellectual Property</h2>
            <p className='my-2' ># Ownership</p>
            <p className='my-2' >All intellectual property rights in the Service, including but not limited to software, text, graphics,
                logos, and trademarks, are owned by Tecorbitron or its licensors. Except as expressly provided in
                these Terms, you do not acquire any ownership rights in the Service or its content. </p>
            <p className='my-2' ># Trademarks and Copyrights</p>
            <p className='mb-4' >The Tecorbitron name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Tecorbitron or its affiliates. You may not use such marks without the prior written permission of Tecorbitron.</p>


            {/* Fees and Payments   */}
            <h2 className="text-2xl mt-10 mb-4 text-prussion-blue">Fees and Payments </h2>
            <p className='my-2' ># Pricing</p>
            <p className='my-2' >Tecorbitron may offer certain products or services for a fee. The applicable pricing and payment terms will be provided at the time of purchase. Prices for our services are subject to change without notice. </p>
            <p className='my-2' ># Payment Terms</p>
            <p className='my-2' >You agree to pay all fees and charges specified for your chosen service plan. Payment is due upon registration or on a recurring basis as specified by the plan. We may use third-party payment processors to facilitate payment. You agree to comply with the terms of service and policies of such third-party payment processors. </p>
            <p className='my-2' ># Refund Policy</p>
            <p className="mb-4">Refund policies for paid services will be specified at the time of purchase. Unless otherwise stated, all payments are non-refundable.</p>

            {/* Privacy Policy  */}
            <h2 className="text-2xl mt-10 mb-4 text-prussion-blue">Privacy Policy</h2>
            <p className="mb-4">Our [Privacy Policy] (Link to privacy policy) explains how we collect, use, and disclose information about you. By using the Service, you consent to the collection and use of your information as described in the Privacy Policy.</p>

            {/* Limitation of Liability    */}
            <h2 className="text-2xl mt-10 mb-4 text-prussion-blue">Limitation of Liability</h2>
            <p className='my-2' >To the fullest extent permitted by applicable law, Tecorbitron and its affiliates, licensors, and service providers, and each of their respective officers, directors, employees, agents, and successors in interest, shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, use, or goodwill, arising out of or in connection with:</p>
            <ol className="list-decimal list-inside mb-4">
                <li className='my-2' >Your use or inability to use the Service;</li>
                <li className='my-2' >Any unauthorized access to or use of our servers and/or any personal information stored therein; </li>
                <li className='my-2' >Any interruption or cessation of transmission to or from the Service;</li>
                <li className='my-2' > Any bugs, viruses, Trojan horses, or the like that may be transmitted to or through the Service by any third party;</li>
                <li className='my-2' > Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available through the Service. </li>
            </ol>

            {/*   Indemnification  */}
            <h2 className="text-2xl mt-10 mb-4 text-prussion-blue">Indemnification</h2>
            <p className='my-2' ># User Indemnity</p>
            <p className='mb-4' >You agree to defend, indemnify, and hold harmless Tecorbitron, its affiliates, licensors, and service providers, and their respective officers, directors, employees, and agents, from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to your violation of these Terms or your use of the Service, including but not limited to your User Content, any use of the Service&apos;s content, services, and products other than as expressly authorized in these Terms, or your use of any information obtained from the Service.</p>

            {/*   Termination  */}
            <h2 className="text-2xl mt-10 mb-4 text-prussion-blue">Termination</h2>
            <p className='my-2' ># Termination Rights</p>
            <p className='my-2' >Tecorbitron reserves the right to terminate or suspend your access to the Service, with or without notice, for conduct that we believe violates these Terms or is harmful to other users or our business interests. We may also terminate or suspend your account for inactivity or non-payment of fees. </p>
            <p className='my-2' ># Effects of Termination</p>
            <p className='mb-4' >Upon termination of your account, your right to access and use the Service will immediately cease. You acknowledge and agree that Tecorbitron may delete your account and any associated data, including User Content, and that we are not liable to you or any third party for any termination of your access to the Service or deletion of your data. </p>
            
            {/* Governing Law */}
            <h2 className="text-2xl mt-10 mb-4 text-prussion-blue">Governing Law</h2>
            <p className='mb-4' >These Terms and any disputes related to them or the Service shall be governed by and construed in accordance with the laws of the jurisdiction in which Tecorbitron is headquartered, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located within that jurisdiction.</p>
            
            {/*    Changes to Terms  */}
            <h2 className="text-2xl mt-10 mb-4 text-prussion-blue">Changes to Terms</h2>
            <p className='my-2' ># Modification Rights</p>
            <p className='my-2' >Tecorbitron reserves the right to modify or update these Terms at any time, at our sole discretion. We will notify you of any changes by posting the new Terms on the Service or by other means of communication. </p>
            <p className='my-2' ># Notification of Changes </p>
            <p className='mb-4' >It is your responsibility to review these Terms periodically. Your continued use of the Service after the posting of any changes to these Terms constitutes acceptance of those changes. If you do not agree to the modified Terms, you must stop using the Service. </p>

            {/*    Miscellaneous  */}
            <h2 className="text-2xl mt-10 mb-4 text-prussion-blue">Miscellaneous</h2>
            <p className='my-2' ># Severability</p>
            <p className='my-2' >If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions of these Terms will remain in full force and effect.</p>
            <p className='my-2' ># Entire Agreement </p>
            <p className='mb-4' >These Terms, along with our Privacy Policy and any other legal notices published by Tecorbitron on the Service, constitute the entire agreement between you and Tecorbitron regarding your use of the Service, superseding any prior agreements between you and Tecorbitron. </p>

            {/* Contact Information */}
            <h2 className="text-2xl mt-10 mb-4 text-prussion-blue">Contact Information</h2>
            <p className='my-2' >If you have any questions or concerns about these Terms or the Service, please contact us at:</p>
            <div className="my-2">Tecorbitron Support </div>
            <div className="my-2">Email: support@tecorbitron.com </div>
            <div className="mb-4">Address: S9, Angel Mega Mall Ghaziabad, Uttar Pradesh, INDIA, 201010</div>

        </div>
    );
};

export default TermsAndConditions;
