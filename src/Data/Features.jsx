import { Accessibility, Book, FireExtinguisher, LayoutGrid, Navigation, Notebook, Pentagon, SquaresIntersect, Text, WholeWord } from "lucide-react"

export const Features = [
    {
        id : 1,
        tilte : "Principles",
        description: "Master design principles essential for crafting effective user interfaces.",
        icon: <div className='p-2 m-8 ml-0  border-2 border-gray-200 inline-block rounded-md shadow-sm'><Book size={28}/></div>
    },
    {
        id : 2, 
        tilte : "Typography",
        description : "Dive into the art of typography and its pivotal role in design.",
        icon : <div className='p-2 m-8 ml-0  border-2 border-gray-200 inline-block rounded-md shadow-sm'><Text size={28}/></div>
    },
    {
        id : 3, 
        tilte : "Color theory",
        description : "Understand color psychology and leverage it to create impactful designs.",
        icon : <div className='p-2 m-8 ml-0  border-2 border-gray-200 inline-block rounded-md shadow-sm'><Notebook size={28}/></div>
    },
    {
        id : 4, 
        tilte : "Layouts",
        description : "Learn to create visually appealing layouts that enhance user experience.",
        icon : <div className='p-2 m-8 ml-0  border-2 border-gray-200 inline-block rounded-md shadow-sm'><LayoutGrid size={28}/></div>
    },
    {
        id : 5 , 
        tilte : "Navigation",
        description : "Design intuitive navigation systems to guide users seamlessly.",
        icon : <div className='p-2 m-8 ml-0  border-2 border-gray-200 inline-block rounded-md shadow-sm'><Navigation size={28}/></div>
    },
    {
        id : 6, 
        tilte : "Interaction",
        description : "Enhance user interactions with intuitive and engaging design elements.",
        icon : <div className='p-2 m-8 ml-0  border-2 border-gray-200 inline-block rounded-md shadow-sm'><SquaresIntersect size={28}/></div>
    },
    {
        id : 7, 
        tilte : "Accessibility",
        description : "Ensure inclusivity in design by optimizing for diverse user needs.",
        icon : <div className='p-2 m-8 ml-0  border-2 border-gray-200 inline-block rounded-md shadow-sm'><Accessibility size={28}/></div>
    },
    {
        id : 8, 
        tilte : "Responsive",
        description : "Optimize designs for various devices, ensuring seamless user experiences.",
        icon : <div className='p-2 m-8 ml-0  border-2 border-gray-200 inline-block rounded-md shadow-sm'><Pentagon size={28}/></div>
    }
]