// components/sections/SkillMatrix/index.jsx
export default function SkillMatrix({ categories, title, description }) {
  return (
    <div className="container mx-auto px-4 py-16">
      {title && (
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      )}
      {description && (
        <p className="text-gray-600 mb-8">{description}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="space-y-8">
            <h3 className="text-lg font-light uppercase tracking-wider">
              {category.name}
            </h3>
            <ul className="space-y-4">
              {category.items.map((item, i) => (
                <li key={i} className="text-sm text-gray-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}