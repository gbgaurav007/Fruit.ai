import { ChatBubbleBottomCenterIcon, LanguageIcon, QuestionMarkCircleIcon, HeartIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Intelligent Chatbot',
        description:
            'Our chatbot helps you explore different fruits, displaying them as cards with full details. Get personalized fruit recommendations based on your preferences.',
        icon: ChatBubbleBottomCenterIcon,
    },
    {
        name: 'Language Translator',
        description:
            'Translate fruit names and descriptions into regional languages. We make sure Fruit.ai is accessible to everyone, regardless of language barriers.',
        icon: LanguageIcon,
    },
    {
        name: 'Frequently Asked Questions (FAQ)',
        description:
            'Got questions? We’ve got answers! Check out our FAQ section for quick and reliable responses about fruits, health benefits, and how to use the app.',
        icon: QuestionMarkCircleIcon,
    },
    {
        name: 'Health & Nutrition Insights',
        description:
            'Discover the nutritional value of different fruits and how they can improve your health. We provide expert insights on fruit-based nutrition to help you live a healthier life.',
        icon: HeartIcon,
    },
]

export default function AboutPage() {
    return (
        <div className="bg-gradient-to-tr from-sky-950 via-blue-950 to-blue-900 sm:py-16 pb-10 pt-10 h-max">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-400">About Fruit.ai</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
                        Your Personal Health and Nutrition Manager
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Fruit.ai helps you manage your diet with the power of fruits. Learn about different fruits, their health
                        benefits, and how to incorporate them into your lifestyle.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-200">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-300">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}