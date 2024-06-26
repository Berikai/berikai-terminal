export default function Welcome({ title, description }) {
    const descriptionElements = [];

    if (Array.isArray(description)) {
        for (let i = 0; i < description.length; i++) {
            const element = description[i];
            descriptionElements.push(<p className="text-lg text-gray-600">{element}</p>);
        }
    } else {
        descriptionElements.push(<p className="text-lg text-gray-600">{description}</p>);
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="mb-2 mt-4 text-4xl font-bold text-gray-800">{title}</h1>
            {descriptionElements}
        </div>
    )
}