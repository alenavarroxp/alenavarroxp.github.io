import {FaUniversity} from 'react-icons/fa'
const MyTimeline = () => {
  return (
    <div className="mt-2">
      <ol className="relative border-l-2 border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-8">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-8 mt-2  ring-white ">
          <FaUniversity color='gray'/>
          </span>
          <h3 className="flex items-center mb-1 text-2xl font-semibold text-gray-200 dark:text-white">
            Ingenieria Informática{" "}
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
              Poner Badge
            </span>
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
           2020 - 2024
          </time>
          <p className="mb-4 text-base font-normal text-white dark:text-gray-400">
           Empecé los estudios en el grado de ingenieria informática y en el tercer curso me especialicé en la rama de ingenieria del software </p>
        </li>
      </ol>
    </div>
  );
};

export default MyTimeline;
