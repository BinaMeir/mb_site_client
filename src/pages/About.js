import { useEffect } from 'react';
import './About.css'; // Import the CSS file

const About = () => {
    useEffect(() => {
        console.log('Scroll effect triggered'); // Check if this logs
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="about">
            <h2>אודותינו</h2>
            <p>
                ברוכים הבאים לברלינגר בנייה ושיפוצים, המקום שבו אומנות הבנייה פוגשת תכנון מוקפד. עם ניסיון של למעלה מ-10 שנים, אנו גאים להפוך בתים וחללים מסחריים למקומות המותאמים לצרכים ולחזון של הלקוחות שלנו.
                בין אם מדובר בשדרוג קטן או בשיפוץ מקיף, אנו מציעים פתרונות מותאמים אישית שמשלבים פונקציונליות ועיצוב מרשים.
            </p>

            <div className="constructor">
                <h3>אודות הקבלן</h3>
                <div className="constructor-content">
                    <p>
                        מיכאל ברלינגר הוא קבלן שיפוצים עם יותר מעשור של ניסיון בתחום הבנייה והשיפוצים. המומחיות שלו כוללת מגוון רחב של פרויקטים, החל משיפוצים קלים ועד לשיפוצים מקיפים של דירות ומבנים מסחריים.
                        מיכאל מחויב לספק ללקוחותיו את השירות הטוב ביותר, תוך דגש על איכות, מקצועיות, ועבודת צוות. גישתו היא להביא את החזון של הלקוחות לחיים באמצעות פתרונות מותאמים אישית ויצירתיים.
                    </p>
                    <img className="constructor-image" src={`${process.env.PUBLIC_URL}/michael.jpg`} alt="Michael Berlinger" />
                </div>
            </div>
            
            <h3>החזון שלנו</h3>
            <p>
                בברלינגר בנייה ושיפוצים אנו מאמינים שכל שיפוץ הוא הזדמנות ליצור חלל שמביא שמחה ונוחות לחיים. בין אם אתם מחפשים לחדש את הבית, לעצב מחדש את מקום העבודה, או לשדרג חללים חיצוניים – המחויבות שלנו היא לספק תוצאות יפות, פרקטיות ועמידות לאורך זמן.
            </p>
            <h3>למה לבחור בנו?</h3>
            <p>
                <ul>
                    <li>מקצועיות וניסיון: הצוות שלנו כולל אנשי מקצוע מיומנים המתמחים בתחומים שונים, כך שכל היבט של הפרויקט מטופל על ידי המומחים הטובים ביותר.</li>
                    <li>שירות מותאם אישית: אנו עובדים בצמוד ללקוחותינו מהתכנון הראשוני ועד להשלמת הפרויקט, ומספקים פתרונות שמתאימים לתקציב ולאורח החיים שלכם.</li>
                    <li>תשומת לב לפרטים: אנו מאמינים בהשקעה בפרטים הקטנים ובביצוע מדויק מהפעם הראשונה.</li>
                    <li>עמידה בזמנים: אנו מבינים את חשיבות הזמן ומתחייבים לעמוד בלוחות הזמנים ובמסגרת התקציב.</li>
                </ul>
            </p>
            <h3>תהליך העבודה שלנו</h3>
            <p>
                1. <strong>פגישת ייעוץ:</strong> נתחיל בהבנת החזון, הצרכים והתקציב שלכם.<br />
                2. <strong>תכנון ועיצוב:</strong> נבנה תוכנית מפורטת שתואמת את המטרות שלכם.<br />
                3. <strong>ביצוע:</strong> ננהל את כל שלבי העבודה בצורה חלקה ויעילה.<br />
                4. <strong>סיום ומעקב:</strong> נוודא שכל פרט תואם את הציפיות שלכם ונעניק תמיכה גם לאחר סיום הפרויקט.
            </p>
        </div>
    );
};

export default About;
