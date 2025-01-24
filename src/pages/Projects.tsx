import { FaGithub, FaExternalLinkAlt, FaFlask, FaBrain, FaRobot } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Notion Clone',
      description: 'Developed a Notion Clone using the MERN stack, featuring dynamic note-taking, task management, and a sleek, responsive UI. It supports real-time collaboration and efficient CRUD operations, showcasing a seamless user experience.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'UI/UX'],
      image: new URL('../assets/notionclone.png', import.meta.url).href,
      github: 'https://github.com/nithinmgowda/notionclone/tree/master/client'
    },
    {
      title: 'Reicetta',
      description: 'Created a recipe app using Kotlin, where AI generates recipes, suggests ingredients, and creates stunning, realistic food images. The app combines innovation with user-friendly design for a delightful cooking experience.',
      tags: ['Kotlin', 'AI', 'Mobile Dev', 'UI/UX'],
      image: new URL('../assets/recipe.png', import.meta.url).href,
      github: 'https://github.com/nithinmgowda/RecipeApp'
    },
    {
      title: 'Medical Search System',
      description: 'Developed a Medical Search System using React and API services, enabling users to locate the nearest hospitals for specific diseases or accidents. The system displays hospital specialists and offers a seamless search experience.',
      tags: ['React.js', 'API Integration', 'UI/UX', 'Healthcare'],
      image: new URL('../assets/medical.png', import.meta.url).href,
      website: 'https://vermillion-biscuit-9ca7df.netlify.app/'
    },
    {
      title: 'Wine Quality Analysis',
      description: 'Implemented a Wine Quality Analysis project using SVM, Logistic Regression, Decision Tree, and Random Forest algorithms to predict wine quality based on its chemical properties. The project highlights comparative model performance and data-driven insights.',
      tags: ['SVM', 'Machine Learning', 'Python', 'Data Analysis'],
      icon: FaFlask,
      github: 'https://github.com/nithinmgowda/winequality'
    },
    {
      title: 'Brain Tumor Verification',
      description: 'Developed a Brain Tumor Verification project using CNN to analyze medical images for accurate tumor detection. The model emphasizes precision and efficiency in diagnosing critical conditions.',
      tags: ['CNN', 'Deep Learning', 'Medical AI', 'Python'],
      icon: FaBrain,
      github: 'https://github.com/nithinmgowda/CNN_BRAIN_TUMOR'
    }
  ];

  const ongoingQuest = {
    title: 'NLP Text Summarizer',
    description: 'A project focused on summarizing text using NLP techniques to provide concise information.',
    tags: ['NLP', 'Hugging Face', 'Python', 'API Integration'],
    icon: FaRobot,
    github: 'https://github.com/nithinmgowda/Textsummarizer'
  };

  return (
    <div className="pixel-box min-h-[80vh]">
      <h1 className="text-2xl md:text-4xl mb-8 text-center">COMPLETED QUESTS</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const projectLink = project.website || project.github;
          const ProjectIcon = project.icon;
          
          return (
            <div 
              key={index} 
              className="pixel-box bg-indigo-900 hover:bg-indigo-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              onClick={() => window.open(projectLink, '_blank')}
              style={{ cursor: 'pointer' }}
            >
              {project.image ? (
                <div className="aspect-video bg-gray-800 mb-4 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-gray-800 mb-4 flex items-center justify-center transform group-hover:scale-105 transition-all duration-300">
                  {ProjectIcon && <ProjectIcon size={64} className="text-gray-600 group-hover:text-blue-400 transition-colors duration-300" />}
                </div>
              )}
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <FaGithub 
                        size={20} 
                        className="text-white group-hover:text-blue-400 transition-colors duration-300 transform group-hover:scale-110"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank');
                        }}
                      />
                    )}
                    {project.website && (
                      <FaExternalLinkAlt 
                        size={20} 
                        className="text-white group-hover:text-blue-400 transition-colors duration-300 transform group-hover:scale-110"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.website, '_blank');
                        }}
                      />
                    )}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="pixel-box bg-blue-600 group-hover:bg-blue-500 px-2 py-1 text-sm transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="text-xl md:text-3xl my-8 text-center">CURRENT QUEST</h2>
      <div className="max-w-2xl mx-auto">
        <div 
          className="pixel-box bg-purple-900 hover:bg-purple-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer group"
          onClick={() => window.open(ongoingQuest.github, '_blank')}
        >
          <div className="p-6 flex gap-6 items-start">
            <div className="flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
              <FaRobot size={48} className="text-purple-300 group-hover:text-purple-200" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl group-hover:text-purple-300 transition-colors duration-300">{ongoingQuest.title}</h3>
                <FaGithub 
                  size={20} 
                  className="text-white group-hover:text-purple-300 transition-colors duration-300 transform group-hover:scale-110"
                />
              </div>
              <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">{ongoingQuest.description}</p>
              <div className="flex flex-wrap gap-2">
                {ongoingQuest.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="pixel-box bg-purple-600 group-hover:bg-purple-500 px-2 py-1 text-sm transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
