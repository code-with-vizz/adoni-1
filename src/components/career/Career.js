


import React, { useState } from 'react';
// import RegistrationForm from './RegistrationForm';
import RegistrationForm from './ResistrationForm';


function Career() {
  const jobList = [
    {
      title: 'CNC Turner',
      vacancies: 5,
      role: 'We are seeking a skilled and experienced CNC Turner to join our manufacturing team. ',
      description: 'Operate CNC turning machines to produce components as per engineering drawings and specifications.  Set up CNC lathes by installing and adjusting tools, attachments, collets, bushings, and stops.  Load and unload parts and materials from CNC machines. Monitor the machining process, making adjustments as necessary to ensure optimal performance and quality  Perform routine maintenance and troubleshooting of CNC machines to ensure proper functioning.',
      joiningInfo: 'Proven experience as a CNC Turner or similar role in a manufacturing environment.  Proficiency in reading and interpreting engineering drawings and blueprints    Strong understanding of CNC programming and G-code. Excellent attention to detail and precision in machining. Ability to use precision measuring instruments such as micrometers, calipers, and gauges.   Good problem-solving skills and the ability to troubleshoot machining issues.  Strong organizational and time management skills.',
    },
    {
      title: 'Marketing Executive',
      vacancies: 2,
      role: 'We are looking for a dynamic and results-driven Marketing Executive to join our marketing team. .',
      description: 'Develop and execute marketing plans and campaigns to promote our products and services.  Conduct market research to identify target audiences, market trends, and competitive analysis. Create and manage content for marketing materials, including brochures, newsletters, social media posts, and website updates.   Plan and coordinate marketing events, trade shows, and promotional activities.  Monitor and analyze the performance of marketing campaigns, adjusting strategies as necessary to achieve desired outcomes.',
      joiningInfo: 'Bachelors degree in Marketing, Business Administration, or a related field. Proven experience as a Marketing Executive or similar role.  Strong understanding of marketing principles and practices.   Excellent written and verbal communication skills.   Proficiency in using marketing software and tools, such as CRM, email marketing platforms, and analytics tools.  Creative thinking and problem-solving abilities.',
    },
    {
      title: 'Digital Marketing Specialist',
      vacancies: 2,
      role: 'We are seeking a talented and experienced Digital Marketing Specialist to join our team.',
      description: 'This is a full-time remote role for a Digital Marketing Intern. The Digital Marketing Intern will be responsible for assisting with social media marketing, digital marketing, web analytics, online marketing, and communication tasks. The intern will gain hands-on experience in various aspects of digital marketing and contribute to the growth of the companys online presence. We wish to target some companies in Mechanical Industry .',
      joiningInfo: "Social Media Marketing and Online Marketing skill  Digital Marketing and Web Analytics skills  Strong communication skills    Experience with digital marketing tools and platforms is a plus   Knowledge of SEO and content marketing is beneficial Ability to work independently and remotely  Currently pursuing a degree in Marketing, Business, or related field",
    },
  ];

  const [selectedJob, setSelectedJob] = useState(null);

  const handleReadMore = (job) => {
    setSelectedJob(job);
  };

  const handleBack = () => {
    setSelectedJob(null);
  };

  return (
    <div>
      <div className='mt-16 relative  w-full h-80'>
        <img className="w-full h-80 object-cover" src='/adoni/career/main-banner-1.png' alt="Career Banner"></img>
        <div className='bg-[#097cbf] h-80 w-full opacity-[80%] absolute top-0'>
          <header className="text-center text-white mt-12">
            <h1 className="text-4xl font-bold mb-4">Careers at Cranebuffer</h1>
            <p className=" text-white  mx-auto max-w-2xl text-lg">
              Join our team at Cranebuffer and help us build innovative solutions
              that transform industries. We are looking for passionate and talented
              individuals who are ready to make a difference.
            </p>
          </header>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl text-center mt-10 font-bold mb-8">Job Openings</h1>
        {selectedJob ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{selectedJob.title}</h3>
            {/* <p className="text-gray-700 mb-1">Vacancies: {selectedJob.vacancies}</p> */}
            <p className="text-gray-700 mb-4">{selectedJob.role}</p>
            <p className="text-gray-700 mb-4">{selectedJob.description}</p>
            <p className="text-gray-700 mb-4">{selectedJob.joiningInfo}</p>
            <p className="text-gray-700 mb-4">{selectedJob.examDate}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleBack}
            >
              Back
            </button>
          </div>
        ) : (
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobList.map((job, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  {/* <p className="text-gray-700 mb-1">Vacancies: {job.vacancies}</p> */}
                  <p className="text-gray-700 mb-4">Job Summery : {job.role}</p>
                  <button
                    className="bg-[#097cbf] text-white px-4 py-1 rounded-3xl  hover:bg-blue-300"
                    onClick={() => handleReadMore(job)}
                  >
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <div>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default Career;
