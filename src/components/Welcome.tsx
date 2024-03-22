export default function Welcome({ title, description }) {
    return (
            <div class="flex flex-col items-center">
                <h1 class="mb-2 mt-4 text-4xl font-bold text-gray-800">{title}</h1>
                <p class="text-lg text-gray-600">{description}</p>
            </div>
    );
}