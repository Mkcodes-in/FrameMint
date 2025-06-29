import { CircleCheck } from "lucide-react"

export const Price = [
    {
        id: 1,
        plan: "Free preview",
        price: "$0",
        pricedes: "Try it before you buy",
        buy: "Free preview",
        keyfeature: [
            { text: "First two chapters", icon: <CircleCheck className="text-gray-400" size={20} /> },
            { text: "Limited-time offer", icon: <CircleCheck className="text-gray-400" size={20} /> },
            { text: "Basic design tips", icon: <CircleCheck className="text-gray-400" size={20} /> }
        ]
    },
    {
        id: 2,
        plan: "The Essentials",
        price: "$99",
        pricedes: "One-time payment",
        buy: "Buy now",
        keyfeature: [
            { text: "Full access to all chapters", icon: <CircleCheck className="text-gray-400" size={20} /> },
            { text: "Advanced techniques", icon: <CircleCheck className="text-gray-400" size={20} /> },
            { text: "Interactive resources", icon: <CircleCheck className="text-gray-400" size={20} /> },
            { text: "Community access", icon: <CircleCheck className="text-gray-400" size={20} /> },
            { text: "30-day money back", icon: <CircleCheck className="text-gray-400" size={20} /> }
        ]
    }
]   