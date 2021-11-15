import Link from 'next/link'
import MathJax from 'better-react-mathjax'

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    {/* <script id="MathJax-script" async
      src="https://cdn.jsdelivr.net/npm/mathjax@3.0.0/es5/tex-mml-chtml.js">
    </script> */}

      <Link href="/">
        <a className="hover:underline">Tcc</a>

      </Link>
      .
    </h2>
  )
}

export default Header
