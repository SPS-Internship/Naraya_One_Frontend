'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'

const leaders = [
  {
    name: "Alexandra Chen",
    position: "Chief Executive Officer",
    bio: "Alexandra leads Naraya.One with over 15 years of experience in strategic business development and digital transformation. Her vision for integrated ecosystems has driven the company's rapid expansion across multiple sectors.",
    image: "AC",
    linkedin: "#",
    expertise: ["Strategic Leadership", "Digital Transformation", "Global Expansion"]
  },
  {
    name: "Marcus Rodriguez",
    position: "Chief Technology Officer",
    bio: "Marcus oversees our technology portfolio and innovation initiatives. With a background in telecommunications engineering and AI development, he ensures our technical infrastructure remains cutting-edge.",
    image: "MR", 
    linkedin: "#",
    expertise: ["Technology Innovation", "AI & Machine Learning", "Infrastructure Design"]
  },
  {
    name: "Sarah Williams",
    position: "Chief Operating Officer",
    bio: "Sarah manages day-to-day operations across all business units, ensuring seamless integration and operational excellence. Her expertise in process optimization has been instrumental in our growth.",
    image: "SW",
    linkedin: "#",
    expertise: ["Operations Management", "Process Optimization", "Cross-functional Integration"]
  },
  {
    name: "David Park",
    position: "Chief Financial Officer", 
    bio: "David oversees financial strategy and investment decisions. His analytical approach and deep understanding of market dynamics help guide our expansion and partnership strategies.",
    image: "DP",
    linkedin: "#",
    expertise: ["Financial Strategy", "Investment Analysis", "Risk Management"]
  },
  {
    name: "Elena Petrov",
    position: "Chief Marketing Officer",
    bio: "Elena drives our brand strategy and market positioning across all sectors. Her innovative approach to integrated marketing has strengthened our presence in global markets.",
    image: "EP",
    linkedin: "#",
    expertise: ["Brand Strategy", "Digital Marketing", "Global Communications"]
  },
  {
    name: "James Thompson",
    position: "Chief Human Resources Officer",
    bio: "James leads our human capital strategy, fostering a culture of innovation and excellence. His focus on talent development and organizational growth supports our expanding ecosystem.",
    image: "JT",
    linkedin: "#", 
    expertise: ["Talent Strategy", "Organizational Development", "Culture Building"]
  }
]

export default function LeadershipTeam() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Leadership Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the visionary leaders who drive our integrated ecosystem forward, 
            bringing together diverse expertise from telecommunications, technology, and services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                {/* Profile Image */}
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-[#FF9A00] to-[#FFD93D] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {leader.image}
                  </div>
                  <h3 className="font-semibold text-xl text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-[#FF9A00] font-medium mb-4">{leader.position}</p>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                  {leader.bio}
                </p>

                {/* Expertise Tags */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LinkedIn Link */}
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <LinkedInLogoIcon className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Leadership Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center bg-gray-50 rounded-2xl p-12"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Join Our Leadership Journey
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            We&apos;re always looking for exceptional leaders who share our vision of integrated business ecosystems. 
            If you&apos;re passionate about driving innovation across telecommunications, technology, and services, 
            we&apos;d love to connect with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              View Open Positions
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
            >
              Executive Opportunities
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
