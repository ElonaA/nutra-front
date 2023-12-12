import { useEffect, useRef } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import "./Privacy.css";

const Privacy = (props) => {
  //scroll to top
  const ref = useRef(null);
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div ref={ref}>
      <Header />
      <div className="privacy-page container">
        <h1>Კონფიდენციალურობის პოლიტიკა</h1>
        <h2>-</h2>
        <p>
          ჩვენთვის ეს კონფიდენციალურობის შეტყობინება აღწერს, თუ როგორ და რატომ
          შეიძლება შევაგროვოთ, შევინახოთ, გამოვიყენოთ და/ან გავაზიაროთ
          („დამუშავება“) თქვენი ინფორმაცია, როდესაც თქვენ იყენებთ ჩვენს
          სერვისებს („მომსახურებებს“), მაგალითად, როდესაც ეწვევით ჩვენს ვებსაიტს
          ან რომელიმე ვებსაიტს
        </p>
        <p>
          . ჩვენი, რომელიც უკავშირდება ამ კონფიდენციალურობის შეტყობინებას.
          ჩაერთეთ ჩვენთან სხვა დაკავშირებული გზებით, მათ შორის ნებისმიერი
          გაყიდვების, მარკეტინგის ან ღონისძიების ჩათვლით. კითხვები თუ შეშფოთება?
          ამ კონფიდენციალურობის შეტყობინების წაკითხვა დაგეხმარებათ გაიგოთ თქვენი
          კონფიდენციალურობის უფლებები და არჩევანი. თუ არ ეთანხმებით ჩვენს
          პოლიტიკას და პრაქტიკას, გთხოვთ, არ გამოიყენოთ ჩვენი სერვისები. თუ ჯერ
          კიდევ გაქვთ რაიმე შეკითხვა ან შეშფოთება, გთხოვთ დაგვიკავშირდეთ
          საკვანძო პუნქტების შეჯამება
        </p>
        <p>
          . რა პერსონალურ ინფორმაციას ვამუშავებთ? როდესაც თქვენ სტუმრობთ,
          იყენებთ ან ნავიგაციას უწევთ ჩვენს სერვისებს, ჩვენ შეიძლება დავამუშაოთ
          პერსონალური ინფორმაცია იმის მიხედვით, თუ როგორ ურთიერთობთ ჩვენთან და
          სერვისებთან, თქვენ მიერ გაკეთებულ არჩევანზე და თქვენს მიერ გამოყენებულ
          პროდუქტებსა და ფუნქციებზე. ვამუშავებთ თუ არა რაიმე მგრძნობიარე
          პერსონალურ ინფორმაციას? ჩვენ არ ვამუშავებთ სენსიტიურ პერსონალურ
          ინფორმაციას. ვიღებთ თუ არა ინფორმაციას მესამე მხარისგან? ჩვენ არ
          ვიღებთ ინფორმაციას მესამე მხარისგან. როგორ ვამუშავებთ თქვენს
          ინფორმაციას? ჩვენ ვამუშავებთ თქვენს ინფორმაციას ჩვენი სერვისების
          უზრუნველსაყოფად, გასაუმჯობესებლად და ადმინისტრირებისთვის, თქვენთან
          კომუნიკაციისთვის, უსაფრთხოებისა და თაღლითობის პრევენციისთვის და
          კანონის შესაბამისად. ჩვენ ასევე შეიძლება დავამუშავოთ თქვენი ინფორმაცია
          სხვა მიზნებისთვის თქვენი თანხმობით. ჩვენ ვამუშავებთ თქვენს ინფორმაციას
          მხოლოდ მაშინ, როდესაც გვაქვს ამის გასაკეთებელი კანონიერი საფუძველი. რა
          სიტუაციებში და რომელ მხარეებს ვუზიარებთ პერსონალურ ინფორმაციას? ჩვენ
          შეიძლება გავუზიაროთ ინფორმაცია კონკრეტულ სიტუაციებში და კონკრეტულ
          მესამე მხარეებს. როგორ შევინარჩუნოთ თქვენი ინფორმაცია უსაფრთხოდ? ჩვენ
          გვაქვს ორგანიზაციული და ტექნიკური პროცესები და პროცედურები თქვენი
          პერსონალური ინფორმაციის დასაცავად. თუმცა, არც ერთი ელექტრონული
          გადაცემა ინტერნეტით ან ინფორმაციის შენახვის ტექნოლოგიით არ არის
          გარანტირებული 100%-ით უსაფრთხოდ, ასე რომ, ჩვენ არ შეგვიძლია დაგპირდეთ
          ან გარანტიას მოგცემთ, რომ ჰაკერები, კიბერკრიმინალები ან სხვა
          არაავტორიზებული მესამე მხარეები ვერ შეძლებენ დაამარცხონ ჩვენი
          უსაფრთხოება და არასწორად შეაგროვონ, წვდომა , მოიპარეთ ან შეცვალეთ
          თქვენი ინფორმაცია. რა უფლებები გაქვთ? იმისდა მიხედვით, თუ სად
          იმყოფებით გეოგრაფიულად, კონფიდენციალურობის შესახებ მოქმედი კანონი
          შეიძლება ნიშნავს, რომ თქვენ გაქვთ გარკვეული უფლებები თქვენს პერსონალურ
          ინფორმაციასთან დაკავშირებით. სარჩევი
        </p>
        <ul className="first-list">
          <li>1. რა ინფორმაციას ვაგროვებთ?</li>
          <li>2. როგორ ვამუშავებთ თქვენს ინფორმაციას?</li>
          <li>
            3. რომელ სამართლებრივ საფუძვლებს ვეყრდნობით თქვენი პერსონალური
            ინფორმაციის დასამუშავებლად?
          </li>
          <li>4. როდის და ვის ვუზიარებთ თქვენს პირად ინფორმაციას?</li>
          <li>
            5. ვიყენებთ თუ არა ქუქი-ფაილებს და თვალთვალის სხვა ტექნოლოგიებს?
          </li>
          <li>6. რამდენ ხანს ვინახავთ თქვენს ინფორმაციას?</li>
          <li>7. როგორ შევინარჩუნოთ თქვენი ინფორმაცია უსაფრთხოდ?</li>
          <li>8. ვაგროვებთ თუ არა ინფორმაციას არასრულწლოვანთაგან?</li>
          <li>9. რა არის თქვენი კონფიდენციალურობის უფლებები?</li>
          <li>10. კონტროლი ფუნქციების „არ თვალყური ადევნოთ“</li>
          <li>
            11. აქვთ თუ არა კალიფორნიის მაცხოვრებლებს კონფიდენციალურობის
            სპეციფიკური უფლებები?
          </li>
          <li>12. ვაკეთებთ თუ არა განახლებებს ამ შეტყობინებაში?</li>
          <li>13. როგორ შეგიძლიათ დაგვიკავშირდეთ ამ შეტყობინების შესახებ?</li>
          <li>
            14. როგორ შეგიძლიათ გადახედოთ, განაახლოთ ან წაშალოთ ჩვენ მიერ
            თქვენგან შეგროვებული მონაცემები?
          </li>
        </ul>
        <ul className="second-list">
          <li>
            <h3>1. რა ინფორმაციას ვაგროვებთ?</h3>
            <p>
              პერსონალური ინფორმაცია, რომელსაც თქვენ გვაწვდით მოკლედ: ჩვენ
              ვაგროვებთ პერსონალურ ინფორმაციას, რომელსაც თქვენ გვაწვდით. ჩვენ
              ვაგროვებთ პერსონალურ ინფორმაციას, რომელსაც თქვენ ნებაყოფლობით
              გვაწვდით, როდესაც გამოხატავთ ინტერესს ჩვენს შესახებ ან ჩვენი
              პროდუქტებისა და სერვისების შესახებ ინფორმაციის მოპოვებით, როდესაც
              თქვენ მონაწილეობთ სერვისების აქტივობებში, ან სხვაგვარად, როდესაც
              დაგვიკავშირდებით. თქვენ მიერ მოწოდებული პირადი ინფორმაცია.
              პერსონალური ინფორმაცია, რომელსაც ჩვენ ვაგროვებთ, დამოკიდებულია
              ჩვენთან და სერვისებთან თქვენი ურთიერთქმედების კონტექსტზე, თქვენ
              მიერ გაკეთებულ არჩევანზე და თქვენ მიერ გამოყენებულ პროდუქტებსა და
              ფუნქციებზე. ჩვენ მიერ შეგროვებული პერსონალური ინფორმაცია შეიძლება
              შეიცავდეს შემდეგს: სახელები ელფოსტის მისამართები სენსიტიური
              ინფორმაცია. ჩვენ არ ვამუშავებთ სენსიტიურ ინფორმაციას. ყველა
              პერსონალური ინფორმაცია, რომელსაც თქვენ გვაწვდით, უნდა იყოს
              ჭეშმარიტი, სრული და ზუსტი და თქვენ უნდა შეგვატყობინოთ ამ
              პერსონალურ ინფორმაციაში ნებისმიერი ცვლილების შესახებ. მოკლედ
              ავტომატურად შეგროვებული ინფორმაცია : ზოგიერთი ინფორმაცია —
              როგორიცაა თქვენი ინტერნეტ პროტოკოლის (IP) მისამართი და/ან
              ბრაუზერის და მოწყობილობის მახასიათებლები — ავტომატურად გროვდება,
              როდესაც თქვენ სტუმრობთ ჩვენს სერვისებს. ჩვენ ავტომატურად ვაგროვებთ
              გარკვეულ ინფორმაციას, როდესაც თქვენ სტუმრობთ, იყენებთ ან
              ნავიგაციას უწევთ სერვისებს. ეს ინფორმაცია არ ავლენს თქვენს
              კონკრეტულ პირადობას (როგორიცაა თქვენი სახელი ან საკონტაქტო
              ინფორმაცია), მაგრამ შეიძლება შეიცავდეს მოწყობილობისა და
              გამოყენების ინფორმაციას, როგორიცაა თქვენი IP მისამართი, ბრაუზერი
              და მოწყობილობის მახასიათებლები, ოპერაციული სისტემა, ენის
              პრეფერენციები, მითითების URL, მოწყობილობის სახელი, ქვეყანა,
              მდებარეობა. , ინფორმაცია იმის შესახებ, თუ როგორ და როდის იყენებთ
              ჩვენს სერვისებს და სხვა ტექნიკური ინფორმაცია. ეს ინფორმაცია პირველ
              რიგში საჭიროა ჩვენი სერვისების უსაფრთხოებისა და მუშაობის
              შესანარჩუნებლად და ჩვენი შიდა ანალიტიკისა და მოხსენების
              მიზნებისთვის. როგორც ბევრი ბიზნესი, ჩვენ ასევე ვაგროვებთ
              ინფორმაციას ქუქიების და მსგავსი ტექნოლოგიების მეშვეობით. ჩვენ მიერ
              შეგროვებული ინფორმაცია მოიცავს: ჟურნალი და გამოყენების მონაცემები.
              ჟურნალის და გამოყენების მონაცემები არის სერვისთან დაკავშირებული,
              დიაგნოსტიკური, გამოყენებისა და მუშაობის შესახებ ინფორმაცია ჩვენი
              სერვერები ავტომატურად აგროვებენ, როდესაც თქვენ წვდებით ან იყენებთ
              ჩვენს სერვისებს და რომელსაც ჩვენ ჩავწერთ ჟურნალის ფაილებში.
              დამოკიდებულია იმაზე, თუ როგორ ურთიერთობთ ჩვენთან, ჟურნალის ეს
              მონაცემები შეიძლება შეიცავდეს თქვენს IP მისამართს, მოწყობილობის
              ინფორმაციას, ბრაუზერის ტიპს და პარამეტრებს და ინფორმაციას თქვენი
              აქტივობის შესახებ სერვისებში (როგორიცაა თარიღის/დროის მარკები,
              რომლებიც დაკავშირებულია თქვენს გამოყენებასთან, გვერდებსა და
              ფაილებთან. , ძიებები და სხვა მოქმედებები, რომლებსაც ახორციელებთ,
              როგორიცაა, თუ რომელ ფუნქციებს იყენებთ), მოწყობილობის მოვლენის
              ინფორმაცია (როგორიცაა სისტემის აქტივობა, შეცდომის შესახებ
              ანგარიშები (ზოგჯერ „ავარიის ნაგავსაყრელებს“ უწოდებენ) და
              აპარატურის პარამეტრები).
            </p>
          </li>
          <li>
            <h3>2. როგორ ვამუშავებთ თქვენს ინფორმაციას?</h3>
            <p>
              მოკლედ: ჩვენ ვამუშავებთ თქვენს ინფორმაციას ჩვენი სერვისების
              უზრუნველსაყოფად, გასაუმჯობესებლად და ადმინისტრირებისთვის, თქვენთან
              კომუნიკაციისთვის, უსაფრთხოებისა და თაღლითობის პრევენციისთვის და
              კანონის შესაბამისად. ჩვენ ასევე შეიძლება დავამუშავოთ თქვენი
              ინფორმაცია სხვა მიზნებისთვის თქვენი თანხმობით. ჩვენ ვამუშავებთ
              თქვენს პირად ინფორმაციას სხვადასხვა მიზეზის გამო, იმისდა მიხედვით,
              თუ როგორ ურთიერთობთ ჩვენს სერვისებთან, მათ შორის: გამოხმაურების
              მოთხოვნით. ჩვენ შეიძლება დავამუშავოთ თქვენი ინფორმაცია საჭიროების
              შემთხვევაში, რათა მოვითხოვოთ გამოხმაურება და დაგიკავშირდეთ ჩვენი
              სერვისების გამოყენების შესახებ. გამოყენების ტენდენციების
              იდენტიფიცირება. ჩვენ შეიძლება დავამუშავოთ ინფორმაცია იმის შესახებ,
              თუ როგორ იყენებთ ჩვენს სერვისებს, რათა უკეთ გავიგოთ, როგორ
              გამოიყენება ისინი, რათა გავაუმჯობესოთ ისინი. ჩვენი მარკეტინგული და
              სარეკლამო კამპანიების ეფექტურობის დასადგენად. ჩვენ შეიძლება
              დავამუშავოთ თქვენი ინფორმაცია, რათა უკეთ გავიგოთ, როგორ მოგაწოდოთ
              მარკეტინგული და სარეკლამო კამპანიები, რომლებიც თქვენთვის ყველაზე
              აქტუალურია. პიროვნების სასიცოცხლო ინტერესების გადარჩენა ან დაცვა.
              ჩვენ შეიძლება დავამუშაოთ თქვენი ინფორმაცია, როდესაც ეს აუცილებელია
              ინდივიდის სასიცოცხლო ინტერესების გადასარჩენად ან დასაცავად,
              როგორიცაა ზიანის თავიდან აცილება.
            </p>
          </li>
          <li>
            <h3>
              3. რომელ სამართლებრივ საფუძვლებს ვეყრდნობით თქვენი ინფორმაციის
              დასამუშავებლად?
            </h3>
            <p>
              მოკლედ: ჩვენ ვამუშავებთ თქვენს პერსონალურ ინფორმაციას მხოლოდ
              მაშინ, როცა გვჯერა, რომ ეს აუცილებელია და გვაქვს მოქმედი კანონის
              თანახმად, ამის საფუძვლიანი სამართლებრივი საფუძველი (მაგ.,
              სამართლებრივი საფუძველი), მაგალითად, თქვენი თანხმობით, დავიცვათ
              კანონები, მოგაწოდოთ მომსახურება შევიდეთ ან შეასრულოთ ჩვენი
              სახელშეკრულებო ვალდებულებები, დავიცვათ თქვენი უფლებები ან
              შეასრულოთ ჩვენი ლეგიტიმური ბიზნეს ინტერესები. თუ თქვენ იმყოფებით
              ევროკავშირში ან დიდ ბრიტანეთში, ეს განყოფილება ვრცელდება თქვენზე.
              მონაცემთა დაცვის ზოგადი რეგულაცია (GDPR) და გაერთიანებული სამეფოს
              GDPR მოითხოვს, განვმარტოთ მოქმედი სამართლებრივი ბაზები, რომლებსაც
              ვეყრდნობით თქვენი პერსონალური ინფორმაციის დასამუშავებლად. როგორც
              ასეთი, ჩვენ შეიძლება დავეყრდნოთ შემდეგ სამართლებრივ საფუძვლებს
              თქვენი პერსონალური ინფორმაციის დასამუშავებლად: თანხმობა. ჩვენ
              შეიძლება დავამუშავოთ თქვენი ინფორმაცია, თუ თქვენ მოგვეცით ნებართვა
              (ანუ თანხმობა), რომ გამოვიყენოთ თქვენი პერსონალური ინფორმაცია
              კონკრეტული მიზნით. თქვენ შეგიძლიათ ნებისმიერ დროს გააუქმოთ თქვენი
              თანხმობა. ლეგიტიმური ინტერესები. ჩვენ შეიძლება დავამუშაოთ თქვენი
              ინფორმაცია, როდესაც მიგვაჩნია, რომ ეს გონივრულად აუცილებელია ჩვენი
              ლეგიტიმური ბიზნეს ინტერესების მისაღწევად და ეს ინტერესები არ
              აღემატება თქვენს ინტერესებს და ფუნდამენტურ უფლებებსა და
              თავისუფლებებს. მაგალითად, ჩვენ შეიძლება დავამუშავოთ თქვენი
              პერსონალური ინფორმაცია ზოგიერთი აღწერილი მიზნისთვის, რათა:
              გავაანალიზოთ, თუ როგორ გამოიყენება ჩვენი სერვისები, რათა
              გავაუმჯობესოთ ისინი მომხმარებლების ჩართულობისა და შენარჩუნების
              მიზნით . შეუძლია გააუმჯობესოს მომხმარებლის გამოცდილება
              სამართლებრივი ვალდებულებები. ჩვენ შეიძლება დავამუშაოთ თქვენი
              ინფორმაცია იქ, სადაც მიგვაჩნია, რომ ეს აუცილებელია ჩვენი
              სამართლებრივი ვალდებულებების შესასრულებლად, როგორიცაა
              სამართალდამცავ ორგანოსთან ან მარეგულირებელ სააგენტოსთან
              თანამშრომლობა, ჩვენი კანონიერი უფლებების გამოყენება ან დაცვა, ან
              თქვენი ინფორმაციის გამჟღავნება, როგორც მტკიცებულება სასამართლო
              დავის დროს. ჩართული. სასიცოცხლო ინტერესები. ჩვენ შეიძლება
              დავამუშაოთ თქვენი ინფორმაცია, სადაც მიგვაჩნია, რომ აუცილებელია
              თქვენი სასიცოცხლო ინტერესების ან მესამე მხარის სასიცოცხლო
              ინტერესების დაცვა, როგორიცაა სიტუაციები, რომლებიც შეიცავს
              პოტენციურ საფრთხეს ნებისმიერი პირის უსაფრთხოებისთვის. თუ თქვენ
              იმყოფებით კანადაში, ეს განყოფილება ეხება თქვენ. ჩვენ შეიძლება
              დავამუშაოთ თქვენი ინფორმაცია, თუ თქვენ მოგვეცით კონკრეტული
              ნებართვა (ანუ გამოხატული თანხმობა), რომ გამოვიყენოთ თქვენი
              პერსონალური ინფორმაცია კონკრეტული მიზნისთვის, ან იმ სიტუაციებში,
              როდესაც თქვენი ნებართვა შეიძლება დავასკვნათ (ანუ ნაგულისხმევი
              თანხმობა). თქვენ შეგიძლიათ ნებისმიერ დროს გააუქმოთ თქვენი
              თანხმობა. ზოგიერთ გამონაკლის შემთხვევაში, მოქმედი კანონმდებლობის
              თანახმად, ჩვენ შეიძლება კანონიერი იყოს ნებადართული, დავამუშავოთ
              თქვენი ინფორმაცია თქვენი თანხმობის გარეშე, მათ შორის, მაგალითად:
              თუ შეგროვება აშკარად ინდივიდუალური ინტერესებშია და თანხმობა ვერ
              მიიღება დროულად გამოძიების და თაღლითობის გამოვლენისთვის. და
              პრევენცია საქმიანი ტრანზაქციებისთვის, გარკვეული პირობების
              დაკმაყოფილების შემთხვევაში, თუ ის შეიცავს მოწმის ჩვენებას და
              შეგროვება აუცილებელია სადაზღვევო პრეტენზიის შესაფასებლად,
              დამუშავების ან მოსაგვარებლად დაშავებული, ავადმყოფი ან გარდაცვლილი
              პირების იდენტიფიცირებისთვის და ნათესავებთან კომუნიკაციისთვის, თუ
              ჩვენ აქვს გონივრული საფუძველი იმის დასაჯერებლად, რომ ინდივიდი იყო,
              არის ან შეიძლება იყოს ფინანსური ძალადობის მსხვერპლი, თუ გონივრულია
              იმის მოლოდინი, რომ შეგროვება და გამოყენება თანხმობით გამოიწვევს
              ინფორმაციის ხელმისაწვდომობას ან სიზუსტეს და შეგროვება გონივრულია
              გამოძიებასთან დაკავშირებული მიზნებისთვის. შეთანხმების დარღვევა ან
              კანადის ან პროვინციის კანონების დარღვევა, თუ გამჟღავნებაა საჭირო
              იმისათვის, რომ შეესაბამებოდეს სასამართლოს გამოძახება, ორდერი,
              სასამართლო ბრძანება ან სასამართლოს წესები, რომლებიც დაკავშირებულია
              ჩანაწერების წარმოებასთან თუ ის შედგენილია ინდივიდის მიერ მათი
              დასაქმების, ბიზნესის ან პროფესიის დროს და კოლექცია შეესაბამება იმ
              მიზნებს, რისთვისაც შეიქმნა ინფორმაცია, თუ კოლექცია მხოლოდ
              ჟურნალისტური, მხატვრული ან ლიტერატურული მიზნებისთვისაა, თუ
              ინფორმაცია საჯაროა. ხელმისაწვდომია და მითითებულია რეგლამენტით
            </p>
          </li>
          <li>
            <h3>4. როდის და ვის ვუზიარებთ თქვენს პირად ინფორმაციას?</h3>
            <p>
              მოკლედ: ჩვენ შეიძლება გავუზიაროთ ინფორმაცია ამ სექციაში აღწერილ
              კონკრეტულ სიტუაციებში და/ან შემდეგ მესამე მხარეებს. შეიძლება
              დაგჭირდეთ თქვენი პირადი ინფორმაციის გაზიარება შემდეგ სიტუაციებში:
              ბიზნეს ტრანსფერები. ჩვენ შეიძლება გავუზიაროთ ან გადავიტანოთ თქვენი
              ინფორმაცია ნებისმიერი შერწყმის, კომპანიის აქტივების გაყიდვის,
              დაფინანსების ან ჩვენი ბიზნესის მთელი ან ნაწილის სხვა კომპანიაზე
              შეძენის შესახებ ან მოლაპარაკებების დროს.
            </p>
          </li>
          <li>
            <h3>
              5. ვიყენებთ თუ არა ქუქი-ფაილებს და თვალთვალის სხვა ტექნოლოგიებს?
            </h3>
            <p>
              მოკლედ: ჩვენ შეიძლება გამოვიყენოთ ქუქიები და თვალთვალის სხვა
              ტექნოლოგიები თქვენი ინფორმაციის შესაგროვებლად და შესანახად. ჩვენ
              შეიძლება გამოვიყენოთ ქუქიები და მსგავსი თვალთვალის ტექნოლოგიები
              (როგორიცაა ვებ შუქურები და პიქსელები) ინფორმაციის წვდომისათვის ან
              შესანახად. კონკრეტული ინფორმაცია იმის შესახებ, თუ როგორ ვიყენებთ
              ასეთ ტექნოლოგიებს და როგორ შეგიძლიათ უარი თქვათ გარკვეულ
              ქუქი-ფაილებზე, მოცემულია ჩვენს ქუქი-ფაილის შეტყობინებაში.
            </p>
          </li>
          <li>
            <h3>6. რამდენ ხანს ვინახავთ თქვენს ინფორმაციას?</h3>
            <p>
              მოკლედ: ჩვენ ვინახავთ თქვენს ინფორმაციას იმდენ ხანს, რამდენიც
              საჭიროა ამ კონფიდენციალურობის შეტყობინებაში ასახული მიზნების
              შესასრულებლად, თუ კანონით სხვა რამ არ არის მოთხოვნილი. ჩვენ
              შევინარჩუნებთ თქვენს პერსონალურ ინფორმაციას მხოლოდ მანამ, სანამ ეს
              აუცილებელია ამ კონფიდენციალურობის შესახებ შეტყობინებაში მითითებული
              მიზნებისთვის, გარდა იმ შემთხვევისა, როდესაც უფრო ხანგრძლივი
              შენახვის ვადა არ არის მოთხოვნილი ან ნებადართული კანონით (როგორიცაა
              საგადასახადო, ბუღალტრული ან სხვა სამართლებრივი მოთხოვნები). ამ
              შეტყობინებაში არანაირი მიზანი არ მოგვითხოვს თქვენი პირადი
              ინფორმაციის შენახვას 90 დღეზე მეტი ხნის განმავლობაში. როდესაც ჩვენ
              არ გვაქვს მუდმივი ლეგიტიმური ბიზნესის საჭიროება თქვენი პერსონალური
              ინფორმაციის დამუშავების, ჩვენ ან წაშლით ან ანონიმურად ვაქცევთ ასეთ
              ინფორმაციას, ან, თუ ეს შეუძლებელია (მაგალითად, იმის გამო, რომ
              თქვენი პერსონალური ინფორმაცია შენახულია სარეზერვო არქივებში),
              მაშინ ჩვენ უსაფრთხოდ გავაგრძელებთ შეინახეთ თქვენი პერსონალური
              ინფორმაცია და გამოყავით იგი შემდგომი დამუშავებისგან, სანამ
              შესაძლებელი იქნება წაშლა.
            </p>
          </li>
          <li>
            <h3>7. როგორ შევინარჩუნოთ თქვენი ინფორმაცია უსაფრთხოდ?</h3>
            <p>
              მოკლედ: ჩვენი მიზანია დავიცვათ თქვენი პერსონალური ინფორმაცია
              ორგანიზაციული და ტექნიკური უსაფრთხოების ზომების სისტემის
              მეშვეობით. ჩვენ განვახორციელეთ შესაბამისი და გონივრული ტექნიკური
              და ორგანიზაციული უსაფრთხოების ზომები, რომლებიც შექმნილია ჩვენს
              მიერ დამუშავებული ნებისმიერი პერსონალური ინფორმაციის უსაფრთხოების
              დასაცავად. თუმცა, მიუხედავად ჩვენი უსაფრთხოების ზომებისა და
              მცდელობისა თქვენი ინფორმაციის უზრუნველსაყოფად, ინტერნეტით ან
              ინფორმაციის შენახვის ტექნოლოგიის არცერთი ელექტრონული გადაცემა არ
              შეიძლება იყოს გარანტირებული 100%-ით უსაფრთხოდ, ასე რომ, ჩვენ არ
              შეგვიძლია დაგპირდეთ ან გარანტიას ვიძლევით, რომ ჰაკერები,
              კიბერკრიმინალები ან სხვა არაავტორიზებული მესამე მხარეები არ
              იქნებიან შეუძლია დაამარცხოს ჩვენი უსაფრთხოება და არასწორად
              შეაგროვოს, წვდომა, მოიპაროს ან შეცვალოს თქვენი ინფორმაცია.
              მიუხედავად იმისა, რომ ჩვენ ყველაფერს გავაკეთებთ იმისათვის, რომ
              დავიცვათ თქვენი პერსონალური ინფორმაცია, პერსონალური ინფორმაციის
              გადაცემა ჩვენს სერვისებზე და ჩვენს სერვისებზე ხდება თქვენივე
              რისკის ქვეშ. თქვენ უნდა შეხვიდეთ სერვისებზე მხოლოდ უსაფრთხო
              გარემოში.
            </p>
          </li>
          <li>
            <h3>8. ვაგროვებთ თუ არა ინფორმაციას არასრულწლოვანთაგან?</h3>
            <p>
              მოკლედ: ჩვენ შეგნებულად არ ვაგროვებთ მონაცემებს 18 წლამდე ასაკის
              ბავშვებისგან და არ ვაწარმოებთ მათ. ჩვენ შეგნებულად არ ვთხოვთ
              მონაცემებს 18 წლამდე ასაკის ბავშვებისგან და არ ვყიდულობთ მათ.
              სერვისების გამოყენებით თქვენ აცხადებთ, რომ ხართ მინიმუმ 18 წლის ან
              რომ ხართ ასეთი არასრულწლოვნის მშობელი ან მეურვე და თანხმობას
              აცხადებთ, რომ ასეთი არასრულწლოვანი დამოკიდებულები გამოიყენონ
              სერვისები. თუ გავიგებთ, რომ 18 წელზე ნაკლები ასაკის მომხმარებლების
              პერსონალური ინფორმაცია შეგროვდა, ჩვენ გავუქმებთ ანგარიშს და
              მივიღებთ გონივრულ ზომებს, რომ დროულად წავშალოთ ასეთი მონაცემები
              ჩვენი ჩანაწერებიდან. თუ გეცოდინებათ რაიმე მონაცემი, რომელიც
              შესაძლოა შეგვეგროვებინა 18 წლამდე ასაკის ბავშვებისგან, გთხოვთ
              დაგვიკავშირდეთ
            </p>
          </li>
          <li>
            <h3>9. რა არის თქვენი კონფიდენციალურობის უფლებები?</h3>
            <p>
              მოკლედ: ზოგიერთ რეგიონში, როგორიცაა ევროპის ეკონომიკური ზონა
              (EEA), გაერთიანებული სამეფო (დიდი ბრიტანეთი) და კანადა, თქვენ
              გაქვთ უფლებები, რომლებიც საშუალებას გაძლევთ უფრო მეტი წვდომა და
              კონტროლი თქვენს პერსონალურ ინფორმაციაზე. ნებისმიერ დროს შეგიძლიათ
              გადახედოთ, შეცვალოთ ან შეწყვიტოთ თქვენი ანგარიში. ზოგიერთ რეგიონში
              (როგორიცაა EEA, დიდი ბრიტანეთი და კანადა), თქვენ გაქვთ გარკვეული
              უფლებები მონაცემთა დაცვის შესახებ მოქმედი კანონმდებლობით. ეს
              შეიძლება მოიცავდეს უფლებას (i) მოითხოვოთ წვდომა და მიიღოთ თქვენი
              პირადი ინფორმაციის ასლი, (ii) მოითხოვოთ გამოსწორება ან წაშლა;
              (iii) შეზღუდოს თქვენი პერსონალური ინფორმაციის დამუშავება; და (iv)
              თუ ეს შესაძლებელია, მონაცემთა პორტაბელურობასთან დაკავშირებით.
              გარკვეულ გარემოებებში, თქვენ ასევე შეიძლება გქონდეთ უფლება
              გააპროტესტოთ თქვენი პერსონალური ინფორმაციის დამუშავება. თქვენ
              შეგიძლიათ დაგვიკავშირდეთ განყოფილებაში „როგორ შეგიძლიათ
              დაგვიკავშირდეთ ამ შეტყობინებების შესახებ“ მოცემული საკონტაქტო
              ინფორმაციის გამოყენებით? ქვევით. ჩვენ განვიხილავთ და ვიმოქმედებთ
              ნებისმიერ მოთხოვნაზე მონაცემთა დაცვის მოქმედი კანონების
              შესაბამისად. თუ თქვენ მდებარეობთ EEA-ში ან დიდ ბრიტანეთში და
              ფიქრობთ, რომ ჩვენ უკანონოდ ვამუშავებთ თქვენს პირად ინფორმაციას,
              თქვენ ასევე გაქვთ უფლება მიმართოთ თქვენს ადგილობრივ მონაცემთა
              დაცვის სამეთვალყურეო ორგანოს. მათი საკონტაქტო მონაცემები შეგიძლიათ
              იხილოთ აქ:
              https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.php.
              თუ თქვენ იმყოფებით შვეიცარიაში, მონაცემთა დაცვის ორგანოების
              საკონტაქტო ინფორმაცია ხელმისაწვდომია აქ:
              https://www.edoeb.admin.ch/edoeb/en/home.html. თქვენი თანხმობის
              გაუქმება: თუ ჩვენ ვეყრდნობით თქვენს თანხმობას თქვენი პერსონალური
              ინფორმაციის დამუშავებაზე, რომელიც შეიძლება იყოს გამოხატული და/ან
              ნაგულისხმევი თანხმობა მოქმედი კანონმდებლობის მიხედვით, თქვენ გაქვთ
              უფლება ნებისმიერ დროს გააუქმოთ თქვენი თანხმობა. თქვენ შეგიძლიათ
              ნებისმიერ დროს გააუქმოთ თქვენი თანხმობა ჩვენთან დაკავშირების გზით
              განყოფილებაში მოცემული საკონტაქტო მონაცემების გამოყენებით „როგორ
              შეგიძლიათ დაგვიკავშირდეთ ამ შეტყობინების შესახებ?“ ქვევით. თუმცა,
              გთხოვთ, გაითვალისწინოთ, რომ ეს არ იმოქმედებს დამუშავების
              კანონიერებაზე მის გაუქმებამდე და, როდესაც მოქმედი კანონმდებლობა
              იძლევა საშუალებას, ეს არ იმოქმედებს თქვენი პერსონალური ინფორმაციის
              დამუშავებაზე, რომელიც ხორციელდება კანონიერი დამუშავების
              საფუძველზე, გარდა თანხმობისა. ქუქიები და მსგავსი ტექნოლოგიები: ვებ
              ბრაუზერების უმეტესობა დაყენებულია ნაგულისხმევად მიიღოს ქუქი
              ფაილები. თუ გსურთ, ჩვეულებრივ შეგიძლიათ აირჩიოთ თქვენი ბრაუზერის
              დაყენება ისე, რომ წაშალოს ქუქიები და უარყოს ქუქი ფაილები. თუ თქვენ
              აირჩევთ ქუქიების წაშლას ან ქუქის უარყოფას, ამან შეიძლება გავლენა
              მოახდინოს ჩვენი სერვისების გარკვეულ მახასიათებლებზე ან სერვისებზე.
              ჩვენს სერვისებზე რეკლამის განმთავსებლების ინტერესებზე დაფუძნებულ
              რეკლამაზე უარის თქმისთვის ეწვიეთ
              http://www.aboutads.info/choices/. თუ თქვენ გაქვთ შეკითხვები ან
              კომენტარები თქვენი კონფიდენციალურობის უფლებებთან დაკავშირებით,
              შეგიძლიათ მოგვწეროთ ელ.
            </p>
          </li>
          <li>
            <h3>10. კონტროლი ფუნქციებზე „არ თვალი ადევნოთ“</h3>
            <p>
              უმეტეს ვებ ბრაუზერებს და ზოგიერთ მობილურ ოპერაციულ სისტემას და
              მობილურ აპლიკაციებს შეიცავს Do-Not-Track („DNT“) ფუნქცია ან
              პარამეტრი, რომელიც შეგიძლიათ გაააქტიუროთ, რათა მიუთითოთ თქვენი
              კონფიდენციალურობის პრეფერენციები, რომ არ გქონდეთ მონაცემები თქვენს
              შესახებ. ონლაინ დათვალიერების აქტივობების მონიტორინგი და
              შეგროვება. ამ ეტაპზე არ არის დასრულებული DNT სიგნალების ამოცნობისა
              და დანერგვის ერთიანი ტექნოლოგიური სტანდარტი. როგორც ასეთი, ჩვენ
              ამჟამად არ ვპასუხობთ DNT ბრაუზერის სიგნალებზე ან სხვა მექანიზმზე,
              რომელიც ავტომატურად აცნობებს თქვენს არჩევანს, რომ არ იყოს
              თვალყურის დევნება ონლაინ. თუ მიღებულ იქნა ონლაინ თვალთვალის
              სტანდარტი, რომელსაც ჩვენ უნდა მივყვეთ მომავალში, ჩვენ
              შეგატყობინებთ ამ პრაქტიკის შესახებ ამ კონფიდენციალურობის
              შეტყობინების შესწორებული ვერსიით.
            </p>
          </li>
          <li>
            <h3>
              11. აქვთ თუ არა კალიფორნიის რეზიდენტებს კონფიდენციალურობის
              სპეციფიკური უფლებები?
            </h3>
            <p>
              მოკლედ: დიახ, თუ თქვენ ხართ კალიფორნიის რეზიდენტი, გეძლევათ
              კონკრეტული უფლებები თქვენს პერსონალურ ინფორმაციაზე წვდომასთან
              დაკავშირებით. კალიფორნიის სამოქალაქო კოდექსის ნაწილი 1798.83,
              რომელიც ასევე ცნობილია, როგორც კანონი „Shine The Light“,
              საშუალებას აძლევს ჩვენს მომხმარებლებს, რომლებიც არიან კალიფორნიის
              მაცხოვრებლები, მოითხოვონ და მიიღონ ჩვენგან, წელიწადში ერთხელ და
              უფასოდ, ინფორმაცია პერსონალური ინფორმაციის კატეგორიების შესახებ
              (ასეთის არსებობის შემთხვევაში). გამჟღავნებული მესამე მხარეებისთვის
              პირდაპირი მარკეტინგის მიზნებისთვის და ყველა მესამე მხარის სახელები
              და მისამართები, რომლებთანაც ჩვენ გავუზიარეთ პირადი ინფორმაცია
              უშუალოდ წინა კალენდარულ წელს. თუ თქვენ ხართ კალიფორნიის რეზიდენტი
              და გსურთ ასეთი მოთხოვნის გაკეთება, გთხოვთ, წერილობით
              გამოგვიგზავნოთ თქვენი მოთხოვნა ქვემოთ მოცემული საკონტაქტო
              ინფორმაციის გამოყენებით. თუ თქვენ ხართ 18 წლამდე, ცხოვრობთ
              კალიფორნიაში და გაქვთ რეგისტრირებული ანგარიში სერვისებში, თქვენ
              გაქვთ უფლება მოითხოვოთ არასასურველი მონაცემების ამოღება, რომელსაც
              საჯაროდ აქვეყნებთ სერვისებში. ასეთი მონაცემების წაშლის მოთხოვნით,
              გთხოვთ, დაგვიკავშირდეთ ქვემოთ მოწოდებული საკონტაქტო ინფორმაციის
              გამოყენებით და მიუთითოთ თქვენს ანგარიშთან დაკავშირებული ელფოსტის
              მისამართი და განცხადება, რომ თქვენ ცხოვრობთ კალიფორნიაში. ჩვენ
              დავრწმუნდებით, რომ მონაცემები საჯაროდ არ არის ნაჩვენები
              სერვისებზე, მაგრამ გთხოვთ, გაითვალისწინოთ, რომ მონაცემები შეიძლება
              არ იყოს მთლიანად ან სრულად ამოღებული ჩვენი ყველა სისტემიდან (მაგ.,
              სარეზერვო ასლები და ა.შ.). CCPA-ის კონფიდენციალურობის შეტყობინება
              კალიფორნიის რეგულაციების კოდექსი განსაზღვრავს „რეზიდენტს“ როგორც:
              (1) ყველა ინდივიდს, რომელიც იმყოფება კალიფორნიის შტატში, გარდა
              დროებითი ან გარდამავალი მიზნისა და (2) ყველა ფიზიკური პირი,
              რომელიც ცხოვრობს კალიფორნიის შტატში, რომელიც ცხოვრობს არის
              კალიფორნიის შტატის ფარგლებს გარეთ დროებითი ან გარდამავალი მიზნით
              ყველა სხვა პირი განისაზღვრება, როგორც „არარეზიდენტი“. თუ
              „რეზიდენტის“ ეს განმარტება ეხება თქვენ, ჩვენ უნდა დავიცვათ
              გარკვეული უფლებები და მოვალეობები თქვენს პერსონალურ ინფორმაციასთან
              დაკავშირებით. რა კატეგორიის პერსონალურ ინფორმაციას ვაგროვებთ? ჩვენ
              შევაგროვეთ პერსონალური ინფორმაციის შემდეგი კატეგორიები ბოლო თორმეტ
              (12) თვეში: შეგროვებული კატეგორიის მაგალითები A. იდენტიფიკატორები
              საკონტაქტო ინფორმაცია, როგორიცაა ნამდვილი სახელი, მეტსახელი,
              საფოსტო მისამართი, ტელეფონის ან მობილურის საკონტაქტო ნომერი,
              უნიკალური პერსონალური იდენტიფიკატორი, ონლაინ იდენტიფიკატორი,
              ინტერნეტ პროტოკოლის მისამართი, ელ. ფოსტის მისამართი და ანგარიშის
              სახელი – YES B. პერსონალური ინფორმაციის კატეგორიები ჩამოთვლილი
              კალიფორნიის მომხმარებელთა ჩანაწერების წესდებაში სახელი, საკონტაქტო
              ინფორმაცია, განათლება, დასაქმება, დასაქმების ისტორია და ფინანსური
              ინფორმაცია – YES C. დაცული კლასიფიკაციის მახასიათებლები
              კალიფორნიის ან ფედერალური კანონი სქესი და დაბადების თარიღი – არა
              D. კომერციული ინფორმაცია ტრანზაქციის ინფორმაცია, შესყიდვების
              ისტორია, ფინანსური დეტალები და გადახდის ინფორმაცია – არა E.
              ბიომეტრიული ინფორმაცია თითის ანაბეჭდები და ხმის ანაბეჭდები – არა
              F. ინტერნეტი ან სხვა მსგავსი ქსელის აქტივობა დათვალიერების
              ისტორია, ძიების ისტორია, ონლაინ ქცევა, ინტერესის მონაცემები და
              ურთიერთქმედება ჩვენს და სხვა ვებსაიტებთან , აპლიკაციები, სისტემები
              და რეკლამები – NO G. გეოლოკაციის მონაცემები მოწყობილობის
              მდებარეობა – NO H. აუდიო, ელექტრონული, ვიზუალური, თერმული,
              ყნოსვითი ან მსგავსი ინფორმაცია ჩვენს ბიზნეს საქმიანობასთან
              დაკავშირებით შექმნილი სურათები და აუდიო, ვიდეო ან ზარის ჩანაწერები
              – NO I პროფესიული ან დასაქმებასთან დაკავშირებული ინფორმაცია
              ბიზნესის საკონტაქტო დეტალები, რათა მოგაწოდოთ ჩვენი სერვისები
              ბიზნესის დონეზე ან სამუშაოს დასახელება, სამუშაო ისტორია და
              პროფესიული კვალიფიკაცია, თუ ჩვენთან მიმართავთ სამუშაოს – NO J.
              განათლება ინფორმაცია სტუდენტის ჩანაწერები და დირექტორია ინფორმაცია
              – არა K. სხვა პერსონალური ინფორმაციისგან მიღებული დასკვნები ზემოთ
              ჩამოთვლილი ნებისმიერი შეგროვებული პერსონალური ინფორმაციისგან
              მიღებული დასკვნა, რათა შეიქმნას პროფილი ან შეჯამება, მაგალითად,
              ინდივიდის პრეფერენციებისა და მახასიათებლების შესახებ – დიახ, ჩვენ
              ასევე შეგვიძლია შევაგროვოთ სხვა პერსონალური ინფორმაცია ამ
              კატეგორიის გარეთ იმ შემთხვევების მეშვეობით, როდესაც თქვენ
              ურთიერთობთ ჩვენთან პირადად, ონლაინ, ან ტელეფონით ან ფოსტით
              კონტექსტში: დახმარების მიღება ჩვენი კლიენტების მხარდაჭერის
              არხებით; მომხმარებელთა გამოკითხვებში ან კონკურსებში მონაწილეობა;
              და ჩვენი სერვისების მიწოდების ხელშეწყობა და თქვენს შეკითხვებზე
              პასუხის გაცემა. როგორ ვიყენებთ და ვიზიარებთ თქვენს პირად
              ინფორმაციას? დამატებითი ინფორმაცია ჩვენი მონაცემთა შეგროვებისა და
              გაზიარების პრაქტიკის შესახებ შეგიძლიათ იხილოთ ამ
              კონფიდენციალურობის შეტყობინებაში. თუ თქვენ იყენებთ ავტორიზებულ
              აგენტს, რათა გამოიყენოს თქვენი უარის თქმის უფლება, ჩვენ შეიძლება
              უარვყოთ მოთხოვნა, თუ ავტორიზებული აგენტი არ წარადგენს
              მტკიცებულებას, რომ ისინი კანონიერად იყვნენ უფლებამოსილი. იმოქმედეთ
              თქვენი სახელით. გაუზიარდება თუ არა თქვენი ინფორმაცია ვინმეს? ჩვენ
              შეიძლება გავამჟღავნოთ თქვენი პერსონალური ინფორმაცია ჩვენს სერვის
              პროვაიდერებთან ჩვენსა და თითოეულ სერვისის პროვაიდერს შორის
              დადებული წერილობითი კონტრაქტის შესაბამისად. თითოეული სერვისის
              პროვაიდერი არის მომგებიანი ორგანიზაცია, რომელიც ამუშავებს
              ინფორმაციას ჩვენი სახელით. ჩვენ შეიძლება გამოვიყენოთ თქვენი
              პერსონალური ინფორმაცია ჩვენი საკუთარი ბიზნეს მიზნებისთვის,
              როგორიცაა შიდა კვლევის ჩასატარებლად ტექნოლოგიური განვითარებისა და
              დემონსტრირების მიზნით. ეს არ ითვლება თქვენი პერსონალური
              ინფორმაციის „გაყიდვად“. წინა თორმეტი (12) თვის განმავლობაში ჩვენ
              არ გაგვიმჟღავნებია და არ მიყიდია პერსონალური ინფორმაცია მესამე
              მხარეებისთვის საქმიანი ან კომერციული მიზნებისთვის. ჩვენ მომავალში
              არ გავყიდით პერსონალურ ინფორმაციას, რომელიც ეკუთვნის ვებსაიტის
              ვიზიტორებს, მომხმარებლებს და სხვა მომხმარებლებს. თქვენი უფლებები
              თქვენს პერსონალურ მონაცემებთან დაკავშირებით შეგიძლიათ მოითხოვოთ
              თქვენი პერსონალური ინფორმაციის წაშლა. თუ გვთხოვთ თქვენი პირადი
              ინფორმაციის წაშლას, ჩვენ პატივს ვცემთ თქვენს მოთხოვნას და წაშლით
              თქვენს პირად ინფორმაციას, კანონით გათვალისწინებული გარკვეული
              გამონაკლისების გათვალისწინებით, როგორიცაა (მაგრამ არ
              შემოიფარგლება) სხვა მომხმარებლის მიერ სიტყვის თავისუფლების უფლების
              გამოყენება. , ჩვენი შესაბამისობის მოთხოვნები, რომლებიც გამოწვეულია
              სამართლებრივი ვალდებულებით ან ნებისმიერი დამუშავებით, რომელიც
              შეიძლება საჭირო გახდეს უკანონო ქმედებებისგან დასაცავად.
              გარემოებებიდან გამომდინარე, თქვენ გაქვთ უფლება იცოდეთ: ვაგროვებთ
              და ვიყენებთ თქვენს პირად ინფორმაციას; პერსონალური ინფორმაციის
              კატეგორიები, რომლებსაც ვაგროვებთ; მიზნები, რისთვისაც გამოიყენება
              შეგროვებული პერსონალური ინფორმაცია; ვყიდით თუ არა თქვენს პირად
              ინფორმაციას მესამე პირებს; პერსონალური ინფორმაციის კატეგორიები,
              რომლებიც ჩვენ გავყიდეთ ან გავამჟღავნეთ ბიზნეს მიზნით; მესამე
              მხარის კატეგორიები, რომლებსაც პერსონალური ინფორმაცია მიჰყიდეს ან
              გამჟღავნდა საქმიანი მიზნით; და პერსონალური ინფორმაციის შეგროვების
              ან გაყიდვის საქმიანი ან კომერციული მიზანი. მოქმედი კანონმდებლობის
              შესაბამისად, ჩვენ არ ვართ ვალდებული მივაწოდოთ ან წავშალოთ
              მომხმარებლის ინფორმაცია, რომელიც დეიდენტიფიცირებულია მომხმარებელთა
              მოთხოვნის საპასუხოდ, ან ხელახლა დავადგინოთ ინდივიდუალური
              მონაცემები მომხმარებლის მოთხოვნის გადამოწმების მიზნით .
              კონფიდენციალურობის უფლებები ჩვენ არ განვახორციელებთ თქვენს
              დისკრიმინაციას, თუ თქვენ იყენებთ თქვენს კონფიდენციალურობის
              უფლებებს. გადამოწმების პროცესი თქვენი მოთხოვნის მიღებისთანავე,
              ჩვენ უნდა გადავამოწმოთ თქვენი ვინაობა, რათა განვსაზღვროთ, რომ
              თქვენ ხართ იგივე ადამიანი, რომლის შესახებაც გვაქვს ინფორმაცია
              ჩვენს სისტემაში. ეს გადამოწმების მცდელობები მოითხოვს, რომ
              მოგთხოვოთ ინფორმაციის მიწოდება, რათა ჩვენ შევძლოთ ის
              შეესაბამებოდეს თქვენს მიერ ადრე მოწოდებულ ინფორმაციას. მაგალითად,
              თქვენ მიერ გაგზავნილი მოთხოვნის სახეობიდან გამომდინარე, შეიძლება
              მოგთხოვოთ გარკვეული ინფორმაციის მიწოდება, რათა შევძლოთ თქვენს მიერ
              მოწოდებული ინფორმაცია შევადაროთ იმ ინფორმაციას, რომელიც უკვე
              გვაქვს ფაილში, ან შეიძლება დაგიკავშირდეთ კომუნიკაციის მეთოდით
              (მაგ. ტელეფონი ან ელექტრონული ფოსტა), რომელიც ადრე მოგვაწოდეთ.
              ჩვენ ასევე შეიძლება გამოვიყენოთ გადამოწმების სხვა მეთოდები, როგორც
              ამას გარემოებები გვკარნახობს. ჩვენ გამოვიყენებთ მხოლოდ თქვენს
              მოთხოვნაში მითითებულ პირად ინფორმაციას თქვენი ვინაობის ან
              მოთხოვნის განხორციელების უფლებამოსილების დასადასტურებლად.
              შეძლებისდაგვარად, ჩვენ თავიდან ავიცილებთ თქვენგან დამატებითი
              ინფორმაციის მოთხოვნას გადამოწმების მიზნით. თუმცა, თუ ჩვენ ვერ
              გადავამოწმეთ თქვენი ვინაობა ჩვენს მიერ უკვე შენახული ინფორმაციის
              მიხედვით, შეიძლება მოვითხოვოთ, რომ მოგაწოდოთ დამატებითი ინფორმაცია
              თქვენი ვინაობის გადამოწმების მიზნით და უსაფრთხოების ან თაღლითობის
              პრევენციის მიზნით. ჩვენ წაშლით დამატებით მოწოდებულ ინფორმაციას,
              როგორც კი დავასრულებთ თქვენს გადამოწმებას. სხვა კონფიდენციალურობის
              უფლებები თქვენ შეგიძლიათ გააპროტესტოთ თქვენი პირადი ინფორმაციის
              დამუშავება. თქვენ შეგიძლიათ მოითხოვოთ თქვენი პერსონალური
              მონაცემების შესწორება, თუ ის არასწორია ან აღარ არის შესაბამისი, ან
              მოითხოვოთ ინფორმაციის დამუშავების შეზღუდვა. თქვენ შეგიძლიათ
              დანიშნოთ ავტორიზებული აგენტი თქვენი სახელით CCPA-ის მიხედვით
              მოთხოვნის განსახორციელებლად. ჩვენ შეიძლება უარვყოთ ავტორიზებული
              აგენტის მოთხოვნა, რომელიც არ წარადგენს მტკიცებულებას, რომ ისინი
              უფლებამოსილი იყვნენ თქვენი სახელით ემოქმედათ CCPA-ის შესაბამისად.
              თქვენ შეგიძლიათ მოითხოვოთ უარი თქვათ თქვენი პერსონალური
              ინფორმაციის სამომავლოდ მესამე მხარეებზე მიყიდვაზე. უარის თქმის
              მოთხოვნის მიღებისთანავე, ჩვენ ვიმოქმედებთ მოთხოვნაზე რაც შეიძლება
              მალე, მაგრამ არაუგვიანეს თხუთმეტი (15) დღისა მოთხოვნის წარდგენის
              დღიდან. ამ უფლებების გამოსაყენებლად, შეგიძლიათ დაგვიკავშირდეთ
              ელექტრონული ფოსტით, ეწვიეთ ან ამ დოკუმენტის ბოლოში მოცემულ
              საკონტაქტო დეტალებზე მითითებით. თუ თქვენ გაქვთ პრეტენზია იმის
              შესახებ, თუ როგორ ვამუშავებთ თქვენს მონაცემებს, გვსურს მოვისმინოთ
              თქვენგან. მეტრიკა ჩვენი მეტრიკა წინა კალენდარული წლისთვის მიღებული
              ყველა CCPA მოთხოვნისთვის შეგიძლიათ იხილოთ.
            </p>
          </li>
          <li>
            <h3>12. ვაკეთებთ თუ არა განახლებებს ამ შეტყობინებაში?</h3>
            <p>
              მოკლედ: დიახ, ჩვენ განვაახლებთ ამ შეტყობინებას საჭიროებისამებრ,
              რათა დავემორჩილოთ შესაბამის კანონებს ჩვენ შეიძლება დროდადრო
              განვაახლოთ ეს კონფიდენციალურობის შეტყობინება. განახლებული ვერსია
              მიეთითება განახლებული „განახლებული“ თარიღით და განახლებული ვერსია
              ამოქმედდება როგორც კი ხელმისაწვდომი გახდება. თუ ჩვენ შევიტანთ
              არსებით ცვლილებებს ამ კონფიდენციალურობის შესახებ შეტყობინებაში,
              ჩვენ შეიძლება შეგატყობინოთ ამ ცვლილებების შესახებ შეტყობინების
              აშკარად გამოქვეყნებით ან უშუალოდ შეტყობინების გაგზავნით. ჩვენ
              მოგიწოდებთ, ხშირად გადახედოთ კონფიდენციალურობის ამ შეტყობინებას,
              რათა მიიღოთ ინფორმაცია იმის შესახებ, თუ როგორ ვიცავთ თქვენს
              ინფორმაციას.
            </p>
          </li>
          <li>
            <h3>13. როგორ შეგიძლიათ დაგვიკავშირდეთ ამ შეტყობინების შესახებ?</h3>
            <p>
              თუ თქვენ გაქვთ შეკითხვები ან კომენტარები ამ შეტყობინების შესახებ,
              შეგიძლიათ მოგვწეროთ ელ.
            </p>
          </li>
          <li>
            <h3>
              14. როგორ შეგიძლიათ გადახედოთ, განაახლოთ ან წაშალოთ ჩვენ მიერ
              თქვენგან შეგროვებული მონაცემები?
            </h3>
            <p>
              თქვენი ქვეყნის მოქმედი კანონმდებლობიდან გამომდინარე, თქვენ
              შეიძლება გქონდეთ უფლება მოითხოვოთ წვდომა იმ პერსონალურ
              ინფორმაციაზე, რომელსაც ჩვენ ვაგროვებთ თქვენგან, შეცვალოთ ეს
              ინფორმაცია ან წაშალოთ იგი.
            </p>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
