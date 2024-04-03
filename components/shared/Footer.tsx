import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="border-extra10 border py-4 md:py-6 px-6 md:px-10 lg:px-14 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          <span className="text-lg">
            Designed By{" "}
            <Link
              className="text-primary"
              href="https://themeforest.net/user/pixelaxis">
              Pixelaxis
            </Link>
          </span>
        </div>
        <div>
          <span className="text-lg">Copyright @ 2024 Restura</span>
        </div>
      </div>
    </>
  );
}
