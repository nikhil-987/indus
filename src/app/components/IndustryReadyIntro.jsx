import Link from "next/link";
const IndustryReadyIntro = () => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Be Industry Ready</h2>
            <p className="mb-4">
                Prepare yourself for a successful career in IT and software engineering by mastering essential concepts and practices. Some of our learning modules:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li><strong>Agile Methodologies:</strong> Understand the principles of Agile development, including Scrum and Kanban. Learn how to work in iterative cycles to enhance team collaboration and improve project outcomes.</li>
                <li><strong>DevOps Practices:</strong> Explore the DevOps culture and its significance in software development. Gain insights into continuous integration and continuous deployment (CI/CD) practices to streamline workflows and enhance efficiency.</li>
                <li><strong>Database Management:</strong> Develop a strong foundation in database concepts, including SQL and NoSQL databases. Learn how to design, manage, and optimize databases to ensure data integrity and accessibility.</li>
                {/* <li><strong>Hands-On Experience:</strong> Engage in practical projects and real-world scenarios that mimic industry challenges. This hands-on approach prepares you to face the demands of the job market confidently.</li> */}
                {/* <li><strong>Career Readiness:</strong> Equip yourself with the skills and knowledge that employers are looking for. Gain insights from industry experts and access resources that will help you stand out in the competitive IT landscape.</li> */}
            </ul>
            <p>...and <button className="bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 rounded-lg border border-blue-500 w-14 focus:outline-none"><Link href="/">More</Link></button></p>

            <p>
                Join us and take the first step towards your future!
            </p>
        </div>
    );
};

export default IndustryReadyIntro;
