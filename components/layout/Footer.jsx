export default function Footer() {
  return (
    <div className="mt-20">
      {/* <div className="text-center">
                <a href="https://prebuiltui.com?utm_source=eliana">
                    <img src="/assets/logo.png" alt="" className="w-36 mx-auto mb-2 dark:hidden" />
                    <img src="/assets/logo_dark.png" alt="" className="w-36 mx-auto mb-2 hidden dark:block" />
                </a>

                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="/assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="/assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href="mailto:contact@prebuiltui.com">contact@prebuiltui.com</a>
                </div>
            </div> */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 dark:border-white/10 mx-[5%] sm:mx-[10%] mt-12 py-6 text-sm text-zinc-600 dark:text-zinc-400 font-Outfit">
        <p className="mb-4 sm:mb-0">
          © {new Date().getFullYear()} Crafted with passion by Ravi Sharma. All
          rights reserved.
        </p>
        <ul className="flex items-center flex-wrap gap-4 sm:gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/raviii26"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://linkedin.com/in/ravisharma2610"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
             href="https://x.com/Ravii2610"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
