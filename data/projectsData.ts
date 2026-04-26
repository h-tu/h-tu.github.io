interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Real-Time Visual SLAM',
    description: `Developing and optimizing deep learning-based feature extraction (SuperPoint, SuperGlue) and multi-sensor fusion for autonomous navigation in real-world conditions.`,
    imgSrc: '/static/images/slam_sony.gif',
    // href: '/research',
  },
  {
    title: 'Retrosynthesis Prediction',
    description: `Evaluated multi-step performance of retrosynthesis models using Transformer-based and GNN approaches. Published as a NeurIPS 2022 Workshop paper with IBM Research.`,
    imgSrc: '/static/images/project_paper1.webp',
    href: 'https://research.ibm.com/publications/retrosynthesis-prediction-revisited',
  },
  {
    title: 'JellyCATalog (iOS)',
    description: `A SwiftUI-based iOS application for the Jellycat collector community, providing a platform for cataloging and managing collections. Optimized with Firebase for real-time data sync.`,
    imgSrc: '/static/images/jcc_image.webp',
    href: 'https://jellycatalog.pages.dev/',
  },
  {
    title: 'AR Guitar Assistant',
    description: `An augmented reality app that auto-detects strings and frets on any guitar fretboard, enabling real-time note visualization and finger tracking using ARKit.`,
    imgSrc: '/static/images/sample0.webp',
  },
  {
    title: 'Autonomous Crossy Road Agent',
    description: `A reinforcement learning agent trained on 100+ hours of gameplay, combining custom YOLO object detection with a Deep Q-Network (DQN).`,
    imgSrc: '/static/images/showcase.gif',
    href: 'https://github.com/h-tu/course_reports/blob/main/grad_projects/682_Final_Paper.pdf',
  },
]

export default projectsData