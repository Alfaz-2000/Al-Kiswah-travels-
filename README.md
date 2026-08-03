This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Al-Kiswah-travels-
This is an travels agency website built with Next.js, Tailwind CSS & GSAP featuring premium animations, popular destinations, flight API integration, travel packages, and WhatsApp inquiry support.


const Navbar = () => {
  return (
        <nav className='flex justify-around bg-[#09283a] p-6 '>
            <div className="logo"><Image src="/aklogo.png" alt="al-kiswah-logo" width={36} height={36} /></div>
            <ul className='flex gap-4 text-[#dcb657]'>
                <Link href={"/"}><li>Home</li></Link>
                <Link href={"/service"}><li>Service</li></Link>
                <Link href={"/about"}><li>About Us</li></Link>
                <Link href={"/contact"}><li>Contact Us</li></Link>
            </ul>
            <button className='flex gap-2 items-center'> <Image src="/what'sapp-icon.svg" alt="what'sapp-image" width={24} height={24} /> <span className='text-[#28cc62]'> what'sapp </span></button>
        </nav>
  )
}

export default Navbar