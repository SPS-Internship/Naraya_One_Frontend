'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  GlobeAltIcon,
  MapPinIcon,
  UserGroupIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'

const entities = {
  'teleconnect-solutions': {
    name: "TeleConnect Solutions",
    sector: "Telecommunications",
    logo: "TC",
    description: "Leading telecommunications infrastructure provider specializing in fiber optic networks, 5G deployment, and hybrid cloud connectivity solutions. Serving enterprise clients and telecommunications operators across 15+ countries.",
    fullDescription: `TeleConnect Solutions stands at the forefront of telecommunications innovation, delivering comprehensive network infrastructure solutions that power the digital economy. Our expertise spans from traditional telecommunications services to cutting-edge 5G networks and cloud connectivity solutions.

Founded in 2010, we have built one of the most robust and reliable telecommunications networks in the industry. Our infrastructure supports millions of connections worldwide, enabling businesses and consumers to stay connected in an increasingly digital world.

Our commitment to innovation drives us to continuously invest in new technologies and expand our service offerings. From fiber optic deployment to 5G network rollouts, we are building the foundation for tomorrow's connected world.`,
    website: "https://teleconnect-solutions.com",
    founded: "2010",
    employees: "2,500+",
    headquarters: "New York, USA",
    locations: ["New York", "London", "Singapore", "São Paulo", "Toronto", "Madrid"],
    keyServices: [
      "Fiber Optic Network Infrastructure",
      "5G Network Deployment & Management", 
      "Hybrid Cloud Connectivity Solutions",
      "Enterprise Telecommunications Services",
      "Network Security & Monitoring",
      "Managed Telecommunications Services"
    ],
    keyStats: [
      { label: "Network Coverage", value: "500K+ Miles" },
      { label: "Active Connections", value: "10M+" },
      { label: "Countries Served", value: "15+" },
      { label: "Uptime Guarantee", value: "99.9%" }
    ],
    socialMedia: {
      linkedin: "#",
      twitter: "#",
      website: "https://teleconnect-solutions.com"
    },
    color: "from-blue-500 to-blue-600",
    achievements: [
      "2023 Telecommunications Excellence Award",
      "ISO 27001 Security Certification",
      "5G Innovation Leadership Award 2022",
      "Best Enterprise Network Provider 2021"
    ]
  },
  'innovatetech-labs': {
    name: "InnovateTech Labs",
    sector: "Technology", 
    logo: "IT",
    description: "Cutting-edge technology laboratory focused on artificial intelligence, machine learning, and digital transformation solutions. Developing proprietary platforms that help businesses optimize operations and enhance customer experiences.",
    fullDescription: `InnovateTech Labs is where tomorrow's technology is created today. Our team of world-class engineers, data scientists, and AI researchers work collaboratively to develop breakthrough solutions that transform how businesses operate and engage with their customers.

Since our founding in 2014, we have been at the cutting edge of artificial intelligence and machine learning innovation. Our proprietary platforms and solutions have helped hundreds of organizations across various industries achieve digital transformation and operational excellence.

We believe that technology should serve humanity, and our solutions are designed to augment human capabilities rather than replace them. Our focus on ethical AI and responsible innovation ensures that our technology creates positive impact for businesses and society.`,
    website: "https://innovatetech-labs.com",
    founded: "2014",
    employees: "800+",
    headquarters: "San Francisco, USA",
    locations: ["San Francisco", "Tel Aviv", "Bangalore", "Berlin", "Austin", "Stockholm"],
    keyServices: [
      "Artificial Intelligence Development",
      "Machine Learning Platforms",
      "Digital Transformation Consulting",
      "Custom Software Development",
      "Data Analytics & Visualization",
      "Cloud-Native Application Development"
    ],
    keyStats: [
      { label: "AI Models Deployed", value: "500+" },
      { label: "Client Success Rate", value: "98%" },
      { label: "Research Patents", value: "25+" },
      { label: "Data Processed Daily", value: "100TB+" }
    ],
    socialMedia: {
      linkedin: "#",
      twitter: "#", 
      website: "https://innovatetech-labs.com"
    },
    color: "from-purple-500 to-purple-600",
    achievements: [
      "AI Innovation Award 2023",
      "Best Digital Transformation Partner 2022",
      "Tech Startup of the Year 2020",
      "Microsoft Gold Partner Certification"
    ]
  }
  // Add more entities as needed...
}

interface EntityDetailProps {
  params: { id: string }
}

export default function EntityDetail({ params }: EntityDetailProps) {
  const entity = entities[params.id as keyof typeof entities]
  
  if (!entity) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/entities"
              className="inline-flex items-center text-[#FF9A00] hover:text-[#e8890a] mb-8 transition-colors duration-300"
            >
              <ChevronLeftIcon className="w-5 h-5 mr-2" />
              Back to All Entities
            </Link>

            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className={`w-32 h-32 rounded-2xl bg-gradient-to-r ${entity.color} flex items-center justify-center text-white text-4xl font-bold shadow-xl`}>
                {entity.logo}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-[#FF9A00]/10 text-[#FF9A00] text-sm font-semibold rounded-full uppercase tracking-wide">
                    {entity.sector}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {entity.name}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                  {entity.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {entity.keyStats.map((stat) => (
              <Card key={stat.label} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-[#FF9A00] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Description */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">About {entity.name}</h2>
                  <div className="prose prose-lg text-gray-600 leading-relaxed">
                    {entity.fullDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-6 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </Card>

                {/* Key Services */}
                <Card className="p-8 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Services & Solutions</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {entity.keyServices.map((service, index) => (
                      <motion.div
                        key={service}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-[#FF9A00] rounded-full mr-4" />
                        <span className="text-gray-700">{service}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>

                {/* Achievements */}
                <Card className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Awards & Achievements</h3>
                  <div className="space-y-4">
                    {entity.achievements.map((achievement, index) => (
                      <motion.div
                        key={achievement}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center p-4 border-l-4 border-[#FF9A00] bg-[#FF9A00]/5 rounded-r-lg"
                      >
                        <span className="text-gray-700">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Company Info */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Company Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CalendarIcon className="w-5 h-5 text-[#FF9A00] mr-3" />
                      <div>
                        <div className="text-sm text-gray-500">Founded</div>
                        <div className="font-semibold">{entity.founded}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <UserGroupIcon className="w-5 h-5 text-[#FF9A00] mr-3" />
                      <div>
                        <div className="text-sm text-gray-500">Employees</div>
                        <div className="font-semibold">{entity.employees}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="w-5 h-5 text-[#FF9A00] mr-3" />
                      <div>
                        <div className="text-sm text-gray-500">Headquarters</div>
                        <div className="font-semibold">{entity.headquarters}</div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Locations */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Global Presence</h3>
                  <div className="space-y-2">
                    {entity.locations.map((location) => (
                      <div key={location} className="flex items-center p-2 bg-gray-50 rounded-lg">
                        <MapPinIcon className="w-4 h-4 text-[#FF9A00] mr-3" />
                        <span className="text-gray-700">{location}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Actions */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Us</h3>
                  <div className="space-y-3">
                    <a 
                      href={entity.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-[#FF9A00] hover:bg-[#e8890a] text-white">
                        <GlobeAltIcon className="w-4 h-4 mr-2" />
                        Visit Website
                        <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-[#FF9A00] text-[#FF9A00] hover:bg-[#FF9A00] hover:text-white">
                        Partnership Inquiry
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
