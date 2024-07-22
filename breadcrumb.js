import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const convertBreadcrumb = string => {
  return string
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
    .toUpperCase();
};

const Breadcrumbs = (props) => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <>
    <nav aria-label="breadcrumbs">
      <ol className="breadcrumb df fac mb20 mfw mdn">
        <li className="lh1">
          <a href="/" className="fs16 mfs14 cb textColor">HOME / </a>
        </li>
        {breadcrumbs.map((breadcrumb, i) => {
          return (
            <li key={breadcrumb.href} className="mlr4 lh1">
              <Link href={breadcrumb.href}>
                <div className="fs16 mfs14 cb textColor">
                  {convertBreadcrumb(breadcrumb.breadcrumb)}
                  &nbsp;/
                </div>
              </Link>
            </li>
            
          );
        })}
      </ol>
    </nav>
    <style jsx global>{`
      .textColor {
        color: ${props.tColor};
      }
    `}</style>
    </>
  );
};

export default Breadcrumbs;