var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "course-documents",
  "level": "1",
  "url": "course-documents.html",
  "type": "Chapter",
  "number": "",
  "title": "Course Documents",
  "body": " Course Documents     "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2: Outer Measure on <span class=\"process-math\">\\(\\mathbf{R}\\)<\/span> (2A)",
  "body": " Week 2: Outer Measure on (2A)   Motivation and Definition of Outer Measure  Lebesgue's revolutionary new idea of how to integrate is that we should partition the range of the function and not the domain.  This means that the integral will take the form of a sum that ranges over all output values . In this sum, is the set of all in the domain such that .  If is an interval, then should denote the length of the interval. Similarly if is a finite union of intervals, then should be the sum of the lengths of each sub-interval.  The set can be more complicated then an interval or a union of intervals. How should we define in this case?  Lebesgue's first attempt at generalizing the length of an interval led to the development of Outer Measure.  To define Outer Measure we first define the length of an open interval.   Length of an Open Interval   The length of an open interval is defined by     If is an arbitrary set then the size of should be less than the lengths of a sequence of intervals that contain . By taking the infinimum over all such covers of we get a pretty good estimate for the size of .    The outer measure of is denoted by and defined by     Example: The outer measure of the closed interval is .   First we will show that . Let be arbitrary. Then is contained in the open interval , which has length . Since can be made arbitrarily small, it follows that .  To prove the other direction we will need the Heine-Borel theorem.     Let . The following are equivalent.    is compact. (That is, every sequence of points in has a subsequence that converges in .)     is closed and bounded.    Every open cover of contains a finite subcover.       We now return to the proof that , suppose that .   By the Heine-Borel Theorem, there is a finite collection of these sets so that .  We will prove by induction that which implies that .  For the base case, note that if then this means that and hence .  Now we assume that and implies that for all choices of with .  Now suppose that are open intervals and . Then belongs to one of those intervals and by relabeling them if necessary we can assume that .  Suppose . If then and . Hence we have proven what we want if this is the case.  Thus we can assume that .  Since only covers , this means that . Hence by the induction hypothesis,   Thus, which completes the proof.   Example: Finite sets have outer measure .   Suppose is a finite set of real numbers. Let be arbitrary and define a sequence of open intervals by .  Then and Since can be made smaller than every positive number it follows that .     Good Properties of Outer Measure    Every countable subset of has outer measure .     Suppose is a countable set of real numbers. Let be arbitrary and define a sequence of open intervals by .  Then and Since can be made smaller than every positive number it follows that .   The next theorem shows that the outer measure of a subset is smaller than the outer measure of the larger set. The fancy word for this is that outer measure is monotone.   Outer Measure Preserves Order   Suppose and are subsets of and . Then .     Suppose is a sequence of intervals whose union contains . Then is also contained in the union and hence Taking the infimum over all covers of gives that .   The previous results give us a nice way to show that is an uncountable set.   Nontrivial Intervals are Uncountable   Every interval in that contains at least 2 distinct elements is uncountable.     Let be an interval that contains and with . Because outer measure preserves order and since countable sets have outer measure , is an uncountable set.   The size of a set should not change if it is moved up or down the real line. Shifting a set in this way is called a translation.   Translation   If and then the translation  is the set defined by      Outer Measure is Translation Invariant   Suppose and . Then .     Let be a sequence of intervals that covers . Then the translations is a sequence of intervals that contains . Hence Taking the infimum over all covers of gives that .  For the other direction, we can write . Thus if is a sequence of intervals that covers then the translations covers . Hence Taking the infimum over all covers of gives that . Thus .   The final property concerns how outer measure interacts with unions of sets. If and are disjoint sets then intuitively the length of should equal the length of plus the length of , and if and overlap then the length of should be less than or equal to the combined lengths of and .  An example with intervals confirms this intuition. If and then . Hence , , and , so .  In fact, this property, which is called subadditivity, holds for countable unions of arbitrary sets.   Countable Subadditivity of Outer Measure   Suppose , , is a countable sequence of subsets of . Then     Note: The theorem is false for the union of uncountably many sets. Consider the union of each point in .   If at least one of the has outer measure then the inequality holds. So we may suppose that for all .  Let . For each let be a sequence of intervals that covers such that   Thus   The proof is finished once we show that the doubly indexed intervals can be rearranged to form a sequence whose union covers .  Consider the sequence , where in step we adjoin the intervals whose indices sum to .  This gives a sequence of intervals whose union covers and whose sum is . Since is arbitrary,      Outer Measure is Not Additive  We just proved that . Intuitively, we would expect that if and are disjoint sets then . Unfortunately this is not the case.   Non-additivity of Outer Measure   There exists disjoint subsets and of such that     We constuct these sets as follows. For , let be the set of numbers in that differ from by a rational number. That is,     If and , then .     Suppose . Then and are both rational numbers. By subtraction is also a rational number.  Thus and differ by rational numbers, so and . Hence if then differs from by a rational number so differs from by a rational number and hence .  Similarly if then . Hence .   Since for each , it follows that .  Using the axiom of choice we may create a set by choosing exactly one element from each of the distinct sets in .  In other words for each the set contains exactly one element.  Let be a sequence of distinct rational numbers such that Then   This is because if and is the unique element in then is a rational number in .  It thus follows from the countable subadditivity of outer measure that   Since is a closed interval and by translation invariance . Hence   This shows that .    The sets are disjoint.     Suppose that . This means that .  Hence . Since and differ by a rational number they belong to the same . But since contains a single element from each this means that .  Hence and thus .   We now have our disjoint sets. Now we need to show that the outer measure of the union of these sets is not equal to the sum of the outer measure of each individual set.  Let be an arbitrary positive integer. Because and each it follows that   Thus   However,   So if we choose so that (Remember that then we have that   If it were true that for all disjoint subsets of then by induction it would follow that for all disjoint subsets of .  However, so this cannot be true.   "
},
{
  "id": "def-length",
  "level": "2",
  "url": "notes-week-02.html#def-length",
  "type": "Definition",
  "number": "1",
  "title": "Length of an Open Interval.",
  "body": " Length of an Open Interval   The length of an open interval is defined by    "
},
{
  "id": "def-outer-measure",
  "level": "2",
  "url": "notes-week-02.html#def-outer-measure",
  "type": "Definition",
  "number": "2",
  "title": "",
  "body": "  The outer measure of is denoted by and defined by    "
},
{
  "id": "Motivation-12",
  "level": "2",
  "url": "notes-week-02.html#Motivation-12",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " First we will show that . Let be arbitrary. Then is contained in the open interval , which has length . Since can be made arbitrarily small, it follows that .  To prove the other direction we will need the Heine-Borel theorem.  "
},
{
  "id": "thm-heine-borel",
  "level": "2",
  "url": "notes-week-02.html#thm-heine-borel",
  "type": "Theorem",
  "number": "3",
  "title": "",
  "body": "  Let . The following are equivalent.    is compact. (That is, every sequence of points in has a subsequence that converges in .)     is closed and bounded.    Every open cover of contains a finite subcover.      "
},
{
  "id": "Motivation-15",
  "level": "2",
  "url": "notes-week-02.html#Motivation-15",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": " By the Heine-Borel Theorem, there is a finite collection of these sets so that .  We will prove by induction that which implies that .  For the base case, note that if then this means that and hence .  Now we assume that and implies that for all choices of with .  Now suppose that are open intervals and . Then belongs to one of those intervals and by relabeling them if necessary we can assume that .  Suppose . If then and . Hence we have proven what we want if this is the case.  Thus we can assume that .  Since only covers , this means that . Hence by the induction hypothesis,   Thus, which completes the proof.  "
},
{
  "id": "Motivation-17",
  "level": "2",
  "url": "notes-week-02.html#Motivation-17",
  "type": "Proof",
  "number": "3",
  "title": "",
  "body": " Suppose is a finite set of real numbers. Let be arbitrary and define a sequence of open intervals by .  Then and Since can be made smaller than every positive number it follows that .  "
},
{
  "id": "thm-measure-zero",
  "level": "2",
  "url": "notes-week-02.html#thm-measure-zero",
  "type": "Theorem",
  "number": "4",
  "title": "",
  "body": "  Every countable subset of has outer measure .   "
},
{
  "id": "good-properties-3",
  "level": "2",
  "url": "notes-week-02.html#good-properties-3",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Suppose is a countable set of real numbers. Let be arbitrary and define a sequence of open intervals by .  Then and Since can be made smaller than every positive number it follows that .  "
},
{
  "id": "thm-monotone",
  "level": "2",
  "url": "notes-week-02.html#thm-monotone",
  "type": "Theorem",
  "number": "5",
  "title": "Outer Measure Preserves Order.",
  "body": " Outer Measure Preserves Order   Suppose and are subsets of and . Then .   "
},
{
  "id": "good-properties-6",
  "level": "2",
  "url": "notes-week-02.html#good-properties-6",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": " Suppose is a sequence of intervals whose union contains . Then is also contained in the union and hence Taking the infimum over all covers of gives that .  "
},
{
  "id": "cor-nontrivial-sets-uncountable",
  "level": "2",
  "url": "notes-week-02.html#cor-nontrivial-sets-uncountable",
  "type": "Corollary",
  "number": "6",
  "title": "Nontrivial Intervals are Uncountable.",
  "body": " Nontrivial Intervals are Uncountable   Every interval in that contains at least 2 distinct elements is uncountable.   "
},
{
  "id": "good-properties-9",
  "level": "2",
  "url": "notes-week-02.html#good-properties-9",
  "type": "Proof",
  "number": "3",
  "title": "",
  "body": " Let be an interval that contains and with . Because outer measure preserves order and since countable sets have outer measure , is an uncountable set.  "
},
{
  "id": "def-translation",
  "level": "2",
  "url": "notes-week-02.html#def-translation",
  "type": "Definition",
  "number": "7",
  "title": "Translation.",
  "body": " Translation   If and then the translation  is the set defined by    "
},
{
  "id": "thm-translation-invariance",
  "level": "2",
  "url": "notes-week-02.html#thm-translation-invariance",
  "type": "Theorem",
  "number": "8",
  "title": "Outer Measure is Translation Invariant.",
  "body": " Outer Measure is Translation Invariant   Suppose and . Then .   "
},
{
  "id": "good-properties-13",
  "level": "2",
  "url": "notes-week-02.html#good-properties-13",
  "type": "Proof",
  "number": "4",
  "title": "",
  "body": " Let be a sequence of intervals that covers . Then the translations is a sequence of intervals that contains . Hence Taking the infimum over all covers of gives that .  For the other direction, we can write . Thus if is a sequence of intervals that covers then the translations covers . Hence Taking the infimum over all covers of gives that . Thus .  "
},
{
  "id": "thm-subadditivity",
  "level": "2",
  "url": "notes-week-02.html#thm-subadditivity",
  "type": "Theorem",
  "number": "9",
  "title": "Countable Subadditivity of Outer Measure.",
  "body": " Countable Subadditivity of Outer Measure   Suppose , , is a countable sequence of subsets of . Then    "
},
{
  "id": "good-properties-19",
  "level": "2",
  "url": "notes-week-02.html#good-properties-19",
  "type": "Proof",
  "number": "5",
  "title": "",
  "body": " If at least one of the has outer measure then the inequality holds. So we may suppose that for all .  Let . For each let be a sequence of intervals that covers such that   Thus   The proof is finished once we show that the doubly indexed intervals can be rearranged to form a sequence whose union covers .  Consider the sequence , where in step we adjoin the intervals whose indices sum to .  This gives a sequence of intervals whose union covers and whose sum is . Since is arbitrary,   "
},
{
  "id": "thm-non-additive",
  "level": "2",
  "url": "notes-week-02.html#thm-non-additive",
  "type": "Theorem",
  "number": "10",
  "title": "Non-additivity of Outer Measure.",
  "body": " Non-additivity of Outer Measure   There exists disjoint subsets and of such that    "
},
{
  "id": "lem-tilde",
  "level": "2",
  "url": "notes-week-02.html#lem-tilde",
  "type": "Lemma",
  "number": "11",
  "title": "",
  "body": "  If and , then .   "
},
{
  "id": "outer-measure-not-additive-6",
  "level": "2",
  "url": "notes-week-02.html#outer-measure-not-additive-6",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Suppose . Then and are both rational numbers. By subtraction is also a rational number.  Thus and differ by rational numbers, so and . Hence if then differs from by a rational number so differs from by a rational number and hence .  Similarly if then . Hence .  "
},
{
  "id": "lem-disjoint",
  "level": "2",
  "url": "notes-week-02.html#lem-disjoint",
  "type": "Lemma",
  "number": "12",
  "title": "",
  "body": "  The sets are disjoint.   "
},
{
  "id": "outer-measure-not-additive-16",
  "level": "2",
  "url": "notes-week-02.html#outer-measure-not-additive-16",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": " Suppose that . This means that .  Hence . Since and differ by a rational number they belong to the same . But since contains a single element from each this means that .  Hence and thus .  "
},
{
  "id": "notes-week-03",
  "level": "1",
  "url": "notes-week-03.html",
  "type": "Section",
  "number": "",
  "title": "Week 3: Measurable Spaces and Functions (2B)",
  "body": " Week 3: Measurable Spaces and Functions (2B)   Desired Properties of Measures  The length of an interval has a number of important properties. If our definition of measure, , is to extend the notion of the length of an interval to all subsets of then it should possess the following properties.    is a function from the set of subsets of to .     for every open interval of .     for every disjoint sequence of subsets of . (Countable Additivity)     for every and . (Translation Invariance)     Outer measure satisfies properties (a), (b), and (d) but fails (c) because it is not additive.  We might try to modify the definition of outer measure to make it countably additive or to search for another way to measure the size of subsets of that will satisfy the desired properties, but neither of these are fruitful endeavors. As the next theorem shows, there is no measure that satisfies all four properties.   Nonexistence of extension of length to all subsets of   There does not exists a function with all the following properties:    is a function from the set of subsets of to .     for every open interval of .     for every disjoint sequence of subsets of . (Countable Additivity)     for every and . (Translation Invariance)        We will prove this by showing that any function that satisfies (a), (b), and (d) must fail (c). Actually, we kind of already did this in our proof that outer measure is not additive.  Thinking back to that proof, we made use of the following properties of outer measure:   If then .     .    If is a sequence of (not necessarily disjoint) subsets of then      We will show that any function that satisfies (a), (b), (c), and (d) also satisfies (1), (2), and (3). Thus the same proof that we used to show that outer measure is not additive applies and show that is not additive-- a contradiction.  To show (1), suppose that . Then and these are disjoint sets.  Hence by  . Since by (a), it follows that .  To show (2) suppose that with and let be arbitrary. Then .  Hence by (1),   Thus it follows from (b) that and since can be made arbitrarily small it follows that .  Finally to show (3) suppose that is a sequence of (not necessarily disjoint) subsets of .  Then the sequence is a sequence of disjoint subsets whose union is the same as .  Hence by (c), which is what we want to show.  Our measure has the same properties of outer measure that we used to construct non-additive disjoint sets. Thus our measure cannot be additive.  Hence cannot satisfy all four properties (a), (b), (c), and (d).     Sigma Algebras  Our previous results shows that if we want to extend the length of an interval to all subsets of we cannot have all four desired properties of measures. We must give up one of our desired properties. But which one do we choose?  We don't want to give up (b) because the measure of an interval needs to be its length, we don't want to give up (c) because countable additivity is useful to have when working with limits, and we don't want to give up (d) because the size of a set should be the same no matter how much you shift it along with real line.  So we will give up (a). This means that there are some subsets of whose size cannot be defined. Such sets are called non-measureable sets.  The sets that we constructed in the proof that outer measure is not additive are non-measurable sets.  Fortunately, in practice all the important sets will turn out to be measurable, so we won't have to worry too much about non-measurable sets.  The collection of all subsets of contains non-measurable sets. The collection of all measurable subsets of forms a -algebra, a collection of subsets that has a number of nice properties.   -algebra   Suppose is a set and is a collection of subsets of . Then is called a -algebra on if the following three conditions are satisfied:    .    If then . ( is closed under compliments)    If , , is a sequence of subsets in then ( is closed under countable unions)       Examples: Suppose that is a set. Then the following are -algebras of :        The set of all subsets of .    The set of all subsets of such that is countable or is countable.     The following theorem proves some important properties of -algebras.   Properties of -algebras   Suppose is a -algebra on a set . Then    .    If then , and . ( -algebras are closed under unions, intersections, and relative compliments)    If is a sequence of subsets in then ( -algebras are closed under countable intersections)        (1) follows because is the compliment of the empty set and .  Proving (2) requires that we show three different things. First, since is closed under countable unions. Second, it follows from De Morgan's Laws that   Since is closed under compliments, both and belong to . Since is closed under countable unions, their union also belongs to , which means that . Finally since is closed under compliments, .  Lastly, . By the properties of -algebras it follows that and . Since is closed under intersections, it follows that . This completes the proof of (b).  To prove (c), we note that it also follows from De Morgan's Laws that   We just showed that if , then so is . Since is closed under countable unions, it follows that .  Hence and thus by the properties of -algebras Thus is closed under countable compliments.   The word ``measurable'' is used in the next definition because we will define a measure on these measurable sets.   Measureable Space   A measurable space is an ordered pair where is a set and is a -algebra on .    A subset in is called an -measurable set or just a measurable set if is clear from context.    Borel Subsets of R and Inverse Images  An important property of -algebras is that given a set of subsets of there is a smallest -algebra that contains .   Smallest -algebra containing a collection of subsets   Suppose is a set and is a set of subsets of . Then the intersection of all -algebras on containing is also a -algebra on .    This intersection, , is the smallest -algebra that contains because if is another -algebra that contains , then .   Let be the intersection of all -algebras containing . To show that is a -algebra we need to verify the three properties of -algebras.  First because is in every -algebra.  Next, If then is in every -algebra that contains . Hence is in every -algebra that contains so .  Finally, suppose is a sequence of subsets in . Then belongs to every -algebra containing . Thus belongs to every -algebra containing .  Thus and is a -algebra.    Borel Set   The smallest -algebra containing all the open subsets of is called the collection of Borel subsets of . A subset in this -algebra is called a Borel set .    Clearly every open set is a Borel set. Since the compliment of a closed set is an open set, every closed set is also a Borel set.  Recall that a set is a set that can be written as a countable intersection of open sets. Since -algebras are closed under countable intersections, every set is also a Borel set.  Recall that an set is a set that can be written as a countable union of closed sets. Since -algebras are closed under countable unions, every set is also a Borel set.  However, there are Borel sets that are neither sets nor sets. In fact, there is no finite procedure involving countable unions, countable intersections, and compliments for constructing the collection of Borel sets.  There are subsets of that are not Borel sets, but any subset of that can be explicitly written down is a Borel set.   Inverse Image   If is a function and , then the set defined by is called the inverse image of     We used the inverse image before when we discussed how the main idea of Lebesgue integration is to partition the range. The sets were the inverse images of certain values of the range.  Example: Suppose is defined by . Then                    Algebra of Inverse Images   Suppose is a function. Then    for every      for every collection of subsets of .     for every collection of subsets of .        Suppose . Then Thus (a) is proved.  Now suppose is a collection of subsets of . Then Thus (b) is proved. The proof of (c) is done the same way as the proof of (b) but with unions replaced with intersections and ``for some'' replaced with ``for all''.    Inverse Image of a Composition   Suppose and are functions. Then for every .     Suppose . Then for  Thus the theorem is proved.     Measurable Functions  Since some sets are unmeasurable, we want to make sure that we are working with functions that behave reasonably with respect to the -algebra on their domains.   Measurable Functions   Suppose is a measurable space. A function is called - measurable (or just measurable if the context is clear) if for every Borel set     Example: If is the set of all subsets of then every function is -Measurable.  Example: Suppose is a subset of the set . The characteristic function of (Also called the indicator function of ) is the function defined by   If , then is Dirichlet's function.  Suppose is a measurable space, and . Then   Thus is a measurable function if and only if   The definition of measurable functions requires us to check the inverse image of every subset of . Fortunately, the next theorem tells us that we only need to check a certain subset of intervals.   Condition for Measureable Functions   Suppose that is a measurable space and is a function such that for all . Then is an -measurable function.     Let We will show that every Borel subset of belongs to . To do this, we will first show that is a -algebra.  First, because .  Second, if , then . Hence by property (a) of inverse images, since is a -algebra.  Thus and is closed under compliments.  Finally, if , , then .  Hence by property (b) of inverse images and since is a -algebra,   Hence and so is closed under countable unions. Thus is a -algebra.  We will now show that contains every open subset of . Since is a -algebra, this will show that contains the smallest -algebra that contains every open subset of and hence contains every Borel subset of . This shows that is -measurable.  By hypothesis contains . Since is closed under compliments also contains .  Since is closed under countable intersections, we also have that contains .  Since we can write and is closed under countable unions, contains .  Also, we can write as and is closed under countable unions, contains   Thus contains every open interval in .  Every open subset of can be written as a countable union of open intervals. Since is closed under countable unions contains every open subset of   Thus is a -algebra that contains every open subset of . So contains all the Borel subsets of . Thus is a measurable function.   We defined measurable functions for an arbitrary set and -algebra , but for most purposes we want to work with Borel sets.   Borel Measurable Function   Suppose . A function is called Borel measurable if is a Borel set for every Borel set .    If and is a Borel measurable function, then must be a Borel set since .  From the theorem we just proved, if and is a function, then is a Borel measurable function if and only if is a Borel set for all .  Suppose and is a function. Whether is measurable depends on which -algebra we are talking about. If is the set of Borel sets contained in then -measurable and Borel measurable are the same thing.  Even if is not the set of Borel sets contained in to check if is -measurable, we still consider the inverse images of Borel subsets of .   Continuous Functions are Borel Measurable   Every continuous real valued function defined on a Borel subset of is Borel Measurable.     Our strategy is to show that is a Borel set for all . So fix and choose with . (If there is no such then , which is a Borel set.)  Since is continuous there exists such that for all .  Hence   Since we have written as an open set intersected with , it is a Borel set. Thus is a Borel measurable function.   We just showed that continuous functions are Borel measurable. Now we will show that increasing functions are Borel measurable.   Increasing Function   Suppose is a function. is called (strictly) increasing if:      Increasing Functions are Borel Measurable   Every increasing function defined on a Borel subset of is a Borel measurable function.     Let be a Borel set and suppose that is increasing. Our strategy is to show that is a Borel set for all   Fix and let . Then either or .  Since we either have the intersection of with an open set or the intersection of with a closed set, we know that is a Borel set and thus is Borel-measurable.    Composition of Measurable Functions   Suppose is a measurable space and is an -measurable function. Suppose is a real valued Borel measurable function defined on a subset of that includes the range of . Then is an -measurable function.     Suppose is a Borel set. Then . Because is a Borel measurable function is a Borel set. Because is an -measurable function . Thus and is an -measurable function.   Example: If is an -measurable function then so are .   All four functions can be written as a composition of with a continuous function and continuous functions are Borel measurable, so by the previous theorem all four functions are -measurable.    Algebraic Operations on Measureable Functions   Suppose is a measurable space and are -measurable. Then    , , are -measurable functions    If for all then is an -measurable function        We will first show that is -measurable. Our strategy is to show that for all .  Specifically, we will show that   Because this is a countable union of finite intersections of open subsets of , this will show that .  Suppose that . (If there is no such then .)  Thus and the open interval is non-empty and contains a rational number .  Hence , which means that . Likewise which means that .  Hence which implies that   To prove the other inclusion suppose for some . Then and .  Adding these inequalities together gives that and thus .  Hence And thus is an -measurable function.  To show that is a measurable function we write it as . Since is measurable, so is and since the sum of measurable functions is measurable, so is .  To show that is a measurable function we note that   If and are measurable then so are and . Hence is also a measurable function.  Finally, to show that is measurable we note that is continuous on and hence Borel measurable. Since , this means that is an -measurable function.  Because , and the product of measurable functions is measurable, it follows that is also measurable.    Pointwise Limit of -Measurable Functions   Suppose that is a measurable space and is a sequence of -measurable functions from to . Suppose exists for each . Define by Then is an -measurable function.    Note: The fact that convergence only needs to be pointwise is a very nice property to have. Recall that the pointwise limit of a sequence of Riemann integrals is not necessarily Riemann integrable and the pointwise limit of a sequence of continuous functions is not necessarily continuous.   Once again, our strategy is to show that for all .  More precisely, we will show that   Since the right side is a countable union of a finite intersection of sets in , it belongs to as well. Thus showing this equality will prove that .  First suppose . Then and hence there exists a positive integer such that .  Hence there exists a positive integer such that for all . So for some and all .  Hence   To prove the opposite inclusion suppose that   Thus there exists positive integers and so that for all .  This implies that for all . Thus taking the limit as yields that and hence .  Hence we have proven that which implies that is an -measurable function.   Sometimes we will want to consider functions that can attain the value or . We can thus extend the notion of Borel sets to subsets of    Borel Subsets of   A subset of is called a Borel set if its intersection with is a Borel set.    With the above definition, the set of Borel subsets of is a -algebra.   Measurable Function   A function is called -measurable if for all Borel subsets of      Condition for a Measurable Function   Suppose is a measurable space and is a function such that for all . Then is an -measurable function.     Pointwise Infimum and Supremum of a Sequence of -Measurable Functions   Suppose is a measurable space and is a sequence of -measurable functions from to . Define by Then and are -measurable functions.     We will first show that is an -measurable function. Our strategy is to show that for all .  We will show that and since the right hand side is a countable union of functions in this will show that .  Suppose . Then . Since is the supremum, this means that there exists such that . Thus .  Hence   To show the other inclusion, suppose belongs to the right hand side. Then there exists such that .  Hence since is the supremum. Thus and hence   Thus is an -measurable function.  To show that is an -measurable function, note that .  Thus the result we proved about supremums shows that is also an -measurable function.    "
},
{
  "id": "thm-nonexist-length",
  "level": "2",
  "url": "notes-week-03.html#thm-nonexist-length",
  "type": "Theorem",
  "number": "13",
  "title": "Nonexistence of extension of length to all subsets of <span class=\"process-math\">\\(\\mathbf{R}\\)<\/span>.",
  "body": " Nonexistence of extension of length to all subsets of   There does not exists a function with all the following properties:    is a function from the set of subsets of to .     for every open interval of .     for every disjoint sequence of subsets of . (Countable Additivity)     for every and . (Translation Invariance)      "
},
{
  "id": "desired-6",
  "level": "2",
  "url": "notes-week-03.html#desired-6",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " We will prove this by showing that any function that satisfies (a), (b), and (d) must fail (c). Actually, we kind of already did this in our proof that outer measure is not additive.  Thinking back to that proof, we made use of the following properties of outer measure:   If then .     .    If is a sequence of (not necessarily disjoint) subsets of then      We will show that any function that satisfies (a), (b), (c), and (d) also satisfies (1), (2), and (3). Thus the same proof that we used to show that outer measure is not additive applies and show that is not additive-- a contradiction.  To show (1), suppose that . Then and these are disjoint sets.  Hence by  . Since by (a), it follows that .  To show (2) suppose that with and let be arbitrary. Then .  Hence by (1),   Thus it follows from (b) that and since can be made arbitrarily small it follows that .  Finally to show (3) suppose that is a sequence of (not necessarily disjoint) subsets of .  Then the sequence is a sequence of disjoint subsets whose union is the same as .  Hence by (c), which is what we want to show.  Our measure has the same properties of outer measure that we used to construct non-additive disjoint sets. Thus our measure cannot be additive.  Hence cannot satisfy all four properties (a), (b), (c), and (d).  "
},
{
  "id": "def-sigma-algebra",
  "level": "2",
  "url": "notes-week-03.html#def-sigma-algebra",
  "type": "Definition",
  "number": "14",
  "title": "<span class=\"process-math\">\\(\\sigma\\)<\/span>-algebra.",
  "body": " -algebra   Suppose is a set and is a collection of subsets of . Then is called a -algebra on if the following three conditions are satisfied:    .    If then . ( is closed under compliments)    If , , is a sequence of subsets in then ( is closed under countable unions)      "
},
{
  "id": "thm-sigma-properties",
  "level": "2",
  "url": "notes-week-03.html#thm-sigma-properties",
  "type": "Theorem",
  "number": "15",
  "title": "Properties of <span class=\"process-math\">\\(\\sigma\\)<\/span>-algebras.",
  "body": " Properties of -algebras   Suppose is a -algebra on a set . Then    .    If then , and . ( -algebras are closed under unions, intersections, and relative compliments)    If is a sequence of subsets in then ( -algebras are closed under countable intersections)      "
},
{
  "id": "subsec-Simga-Algebras-12",
  "level": "2",
  "url": "notes-week-03.html#subsec-Simga-Algebras-12",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " (1) follows because is the compliment of the empty set and .  Proving (2) requires that we show three different things. First, since is closed under countable unions. Second, it follows from De Morgan's Laws that   Since is closed under compliments, both and belong to . Since is closed under countable unions, their union also belongs to , which means that . Finally since is closed under compliments, .  Lastly, . By the properties of -algebras it follows that and . Since is closed under intersections, it follows that . This completes the proof of (b).  To prove (c), we note that it also follows from De Morgan's Laws that   We just showed that if , then so is . Since is closed under countable unions, it follows that .  Hence and thus by the properties of -algebras Thus is closed under countable compliments.  "
},
{
  "id": "def-measurable-space",
  "level": "2",
  "url": "notes-week-03.html#def-measurable-space",
  "type": "Definition",
  "number": "16",
  "title": "Measureable Space.",
  "body": " Measureable Space   A measurable space is an ordered pair where is a set and is a -algebra on .   "
},
{
  "id": "thm-smallest-sigma",
  "level": "2",
  "url": "notes-week-03.html#thm-smallest-sigma",
  "type": "Theorem",
  "number": "17",
  "title": "Smallest <span class=\"process-math\">\\(\\sigma\\)<\/span>-algebra containing a collection of subsets.",
  "body": " Smallest -algebra containing a collection of subsets   Suppose is a set and is a set of subsets of . Then the intersection of all -algebras on containing is also a -algebra on .   "
},
{
  "id": "subsec-Borel-Subsets-of-R-5",
  "level": "2",
  "url": "notes-week-03.html#subsec-Borel-Subsets-of-R-5",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Let be the intersection of all -algebras containing . To show that is a -algebra we need to verify the three properties of -algebras.  First because is in every -algebra.  Next, If then is in every -algebra that contains . Hence is in every -algebra that contains so .  Finally, suppose is a sequence of subsets in . Then belongs to every -algebra containing . Thus belongs to every -algebra containing .  Thus and is a -algebra.  "
},
{
  "id": "def-Borel-set",
  "level": "2",
  "url": "notes-week-03.html#def-Borel-set",
  "type": "Definition",
  "number": "18",
  "title": "Borel Set.",
  "body": " Borel Set   The smallest -algebra containing all the open subsets of is called the collection of Borel subsets of . A subset in this -algebra is called a Borel set .   "
},
{
  "id": "def-inverse-image",
  "level": "2",
  "url": "notes-week-03.html#def-inverse-image",
  "type": "Definition",
  "number": "19",
  "title": "Inverse Image.",
  "body": " Inverse Image   If is a function and , then the set defined by is called the inverse image of    "
},
{
  "id": "thm-alg-inv-im",
  "level": "2",
  "url": "notes-week-03.html#thm-alg-inv-im",
  "type": "Theorem",
  "number": "20",
  "title": "Algebra of Inverse Images.",
  "body": " Algebra of Inverse Images   Suppose is a function. Then    for every      for every collection of subsets of .     for every collection of subsets of .      "
},
{
  "id": "subsec-Borel-Subsets-of-R-16",
  "level": "2",
  "url": "notes-week-03.html#subsec-Borel-Subsets-of-R-16",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": " Suppose . Then Thus (a) is proved.  Now suppose is a collection of subsets of . Then Thus (b) is proved. The proof of (c) is done the same way as the proof of (b) but with unions replaced with intersections and ``for some'' replaced with ``for all''.  "
},
{
  "id": "thm-inv-comp",
  "level": "2",
  "url": "notes-week-03.html#thm-inv-comp",
  "type": "Theorem",
  "number": "21",
  "title": "Inverse Image of a Composition.",
  "body": " Inverse Image of a Composition   Suppose and are functions. Then for every .   "
},
{
  "id": "subsec-Borel-Subsets-of-R-18",
  "level": "2",
  "url": "notes-week-03.html#subsec-Borel-Subsets-of-R-18",
  "type": "Proof",
  "number": "3",
  "title": "",
  "body": " Suppose . Then for  Thus the theorem is proved.  "
},
{
  "id": "def-measurable-funct",
  "level": "2",
  "url": "notes-week-03.html#def-measurable-funct",
  "type": "Definition",
  "number": "22",
  "title": "Measurable Functions.",
  "body": " Measurable Functions   Suppose is a measurable space. A function is called - measurable (or just measurable if the context is clear) if for every Borel set    "
},
{
  "id": "thm-condition-meas-funct",
  "level": "2",
  "url": "notes-week-03.html#thm-condition-meas-funct",
  "type": "Theorem",
  "number": "23",
  "title": "Condition for Measureable Functions.",
  "body": " Condition for Measureable Functions   Suppose that is a measurable space and is a function such that for all . Then is an -measurable function.   "
},
{
  "id": "subsec-measurable-function-11",
  "level": "2",
  "url": "notes-week-03.html#subsec-measurable-function-11",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Let We will show that every Borel subset of belongs to . To do this, we will first show that is a -algebra.  First, because .  Second, if , then . Hence by property (a) of inverse images, since is a -algebra.  Thus and is closed under compliments.  Finally, if , , then .  Hence by property (b) of inverse images and since is a -algebra,   Hence and so is closed under countable unions. Thus is a -algebra.  We will now show that contains every open subset of . Since is a -algebra, this will show that contains the smallest -algebra that contains every open subset of and hence contains every Borel subset of . This shows that is -measurable.  By hypothesis contains . Since is closed under compliments also contains .  Since is closed under countable intersections, we also have that contains .  Since we can write and is closed under countable unions, contains .  Also, we can write as and is closed under countable unions, contains   Thus contains every open interval in .  Every open subset of can be written as a countable union of open intervals. Since is closed under countable unions contains every open subset of   Thus is a -algebra that contains every open subset of . So contains all the Borel subsets of . Thus is a measurable function.  "
},
{
  "id": "def-borel-funct",
  "level": "2",
  "url": "notes-week-03.html#def-borel-funct",
  "type": "Definition",
  "number": "24",
  "title": "Borel Measurable Function.",
  "body": " Borel Measurable Function   Suppose . A function is called Borel measurable if is a Borel set for every Borel set .   "
},
{
  "id": "thm-cont-funct-borel",
  "level": "2",
  "url": "notes-week-03.html#thm-cont-funct-borel",
  "type": "Theorem",
  "number": "25",
  "title": "Continuous Functions are Borel Measurable.",
  "body": " Continuous Functions are Borel Measurable   Every continuous real valued function defined on a Borel subset of is Borel Measurable.   "
},
{
  "id": "subsec-measurable-function-19",
  "level": "2",
  "url": "notes-week-03.html#subsec-measurable-function-19",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": " Our strategy is to show that is a Borel set for all . So fix and choose with . (If there is no such then , which is a Borel set.)  Since is continuous there exists such that for all .  Hence   Since we have written as an open set intersected with , it is a Borel set. Thus is a Borel measurable function.  "
},
{
  "id": "def-increasing-function",
  "level": "2",
  "url": "notes-week-03.html#def-increasing-function",
  "type": "Definition",
  "number": "26",
  "title": "Increasing Function.",
  "body": " Increasing Function   Suppose is a function. is called (strictly) increasing if:    "
},
{
  "id": "thm-increasing-borel",
  "level": "2",
  "url": "notes-week-03.html#thm-increasing-borel",
  "type": "Theorem",
  "number": "27",
  "title": "Increasing Functions are Borel Measurable.",
  "body": " Increasing Functions are Borel Measurable   Every increasing function defined on a Borel subset of is a Borel measurable function.   "
},
{
  "id": "subsec-measurable-function-23",
  "level": "2",
  "url": "notes-week-03.html#subsec-measurable-function-23",
  "type": "Proof",
  "number": "3",
  "title": "",
  "body": " Let be a Borel set and suppose that is increasing. Our strategy is to show that is a Borel set for all   Fix and let . Then either or .  Since we either have the intersection of with an open set or the intersection of with a closed set, we know that is a Borel set and thus is Borel-measurable.  "
},
{
  "id": "thm-comp-measurable",
  "level": "2",
  "url": "notes-week-03.html#thm-comp-measurable",
  "type": "Theorem",
  "number": "28",
  "title": "Composition of Measurable Functions.",
  "body": " Composition of Measurable Functions   Suppose is a measurable space and is an -measurable function. Suppose is a real valued Borel measurable function defined on a subset of that includes the range of . Then is an -measurable function.   "
},
{
  "id": "subsec-measurable-function-25",
  "level": "2",
  "url": "notes-week-03.html#subsec-measurable-function-25",
  "type": "Proof",
  "number": "4",
  "title": "",
  "body": " Suppose is a Borel set. Then . Because is a Borel measurable function is a Borel set. Because is an -measurable function . Thus and is an -measurable function.  "
},
{
  "id": "subsec-measurable-function-27",
  "level": "2",
  "url": "notes-week-03.html#subsec-measurable-function-27",
  "type": "Proof",
  "number": "5",
  "title": "",
  "body": " All four functions can be written as a composition of with a continuous function and continuous functions are Borel measurable, so by the previous theorem all four functions are -measurable.  "
},
{
  "id": "thm-alg-operation-measurable-funct",
  "level": "2",
  "url": "notes-week-03.html#thm-alg-operation-measurable-funct",
  "type": "Theorem",
  "number": "29",
  "title": "Algebraic Operations on Measureable Functions.",
  "body": " Algebraic Operations on Measureable Functions   Suppose is a measurable space and are -measurable. Then    , , are -measurable functions    If for all then is an -measurable function      "
},
{
  "id": "subsec-measurable-function-29",
  "level": "2",
  "url": "notes-week-03.html#subsec-measurable-function-29",
  "type": "Proof",
  "number": "6",
  "title": "",
  "body": " We will first show that is -measurable. Our strategy is to show that for all .  Specifically, we will show that   Because this is a countable union of finite intersections of open subsets of , this will show that .  Suppose that . (If there is no such then .)  Thus and the open interval is non-empty and contains a rational number .  Hence , which means that . Likewise which means that .  Hence which implies that   To prove the other inclusion suppose for some . Then and .  Adding these inequalities together gives that and thus .  Hence And thus is an -measurable function.  To show that is a measurable function we write it as . Since is measurable, so is and since the sum of measurable functions is measurable, so is .  To show that is a measurable function we note that   If and are measurable then so are and . Hence is also a measurable function.  Finally, to show that is measurable we note that is continuous on and hence Borel measurable. Since , this means that is an -measurable function.  Because , and the product of measurable functions is measurable, it follows that is also measurable.  "
},
{
  "id": "thm-pointwise-limit-meas-funct",
  "level": "2",
  "url": "notes-week-03.html#thm-pointwise-limit-meas-funct",
  "type": "Theorem",
  "number": "30",
  "title": "Pointwise Limit of <span class=\"process-math\">\\(S\\)<\/span>-Measurable Functions.",
  "body": " Pointwise Limit of -Measurable Functions   Suppose that is a measurable space and is a sequence of -measurable functions from to . Suppose exists for each . Define by Then is an -measurable function.   "
},
{
  "id": "subsec-measurable-function-32",
  "level": "2",
  "url": "notes-week-03.html#subsec-measurable-function-32",
  "type": "Proof",
  "number": "7",
  "title": "",
  "body": " Once again, our strategy is to show that for all .  More precisely, we will show that   Since the right side is a countable union of a finite intersection of sets in , it belongs to as well. Thus showing this equality will prove that .  First suppose . Then and hence there exists a positive integer such that .  Hence there exists a positive integer such that for all . So for some and all .  Hence   To prove the opposite inclusion suppose that   Thus there exists positive integers and so that for all .  This implies that for all . Thus taking the limit as yields that and hence .  Hence we have proven that which implies that is an -measurable function.  "
},
{
  "id": "def-borel-inf",
  "level": "2",
  "url": "notes-week-03.html#def-borel-inf",
  "type": "Definition",
  "number": "31",
  "title": "Borel Subsets of <span class=\"process-math\">\\([-\\infty, \\infty]\\)<\/span>.",
  "body": " Borel Subsets of   A subset of is called a Borel set if its intersection with is a Borel set.   "
},
{
  "id": "def-measurable-function-inf",
  "level": "2",
  "url": "notes-week-03.html#def-measurable-function-inf",
  "type": "Definition",
  "number": "32",
  "title": "Measurable Function.",
  "body": " Measurable Function   A function is called -measurable if for all Borel subsets of    "
},
{
  "id": "thm-cond-measure-inf",
  "level": "2",
  "url": "notes-week-03.html#thm-cond-measure-inf",
  "type": "Theorem",
  "number": "33",
  "title": "Condition for a Measurable Function.",
  "body": " Condition for a Measurable Function   Suppose is a measurable space and is a function such that for all . Then is an -measurable function.   "
},
{
  "id": "thm-pointwise-inf-sup-meas",
  "level": "2",
  "url": "notes-week-03.html#thm-pointwise-inf-sup-meas",
  "type": "Theorem",
  "number": "34",
  "title": "Pointwise Infimum and Supremum of a Sequence of <span class=\"process-math\">\\(S\\)<\/span>-Measurable Functions.",
  "body": " Pointwise Infimum and Supremum of a Sequence of -Measurable Functions   Suppose is a measurable space and is a sequence of -measurable functions from to . Define by Then and are -measurable functions.   "
},
{
  "id": "subsec-measurable-function-39",
  "level": "2",
  "url": "notes-week-03.html#subsec-measurable-function-39",
  "type": "Proof",
  "number": "8",
  "title": "",
  "body": " We will first show that is an -measurable function. Our strategy is to show that for all .  We will show that and since the right hand side is a countable union of functions in this will show that .  Suppose . Then . Since is the supremum, this means that there exists such that . Thus .  Hence   To show the other inclusion, suppose belongs to the right hand side. Then there exists such that .  Hence since is the supremum. Thus and hence   Thus is an -measurable function.  To show that is an -measurable function, note that .  Thus the result we proved about supremums shows that is also an -measurable function.  "
},
{
  "id": "notes-week-04",
  "level": "1",
  "url": "notes-week-04.html",
  "type": "Section",
  "number": "",
  "title": "Week 4: Measures and Their Properties (2C)",
  "body": " Week 4: Measures and Their Properties (2C)   Definition and Examples of Measures  The motivation for defining outer measure was to extend the concept of the length of an interval to all subsets of . However we will define a more general definition of measure which will also extend areas of squares and volumes of cubes to subsets of and .   Measure   Suppose is a set and is a -algebra on . A on is a function such that and for every sequence of disjoint subsets of sets in .    Example: Let be a set and let be the -algebra of all subsets of . Define a measure on by if contains elements and if contains infinitely many elements. This is called the counting measure.  Example: Let be the -algebra of all subsets of . Then the outer measure on is not a measure on because it is not countably additive.  Example: Let be the -algebra of all Borel subsets of . We will prove in the next section that the outer measure on is a measure on .  Example: Suppose is a -algebra on a set . A probability measure is a measure on such that .   is called the sample space and a subset in is called an event .  If is an event then is called the probability of .  Consider an experiment in which a 6 sided die is rolled. The sample space is the set .  Let be the -algebra of all subsets of and let be the measure on defined by where is the number of elements of . Then is a probability measure on .  Let be the event that the die lands on an even number. Then . Hence .  Recall that a measurable space is a set along with a -algebra . If we include a measure then we have a measure space.   Measure Space   A measure space is an ordered triple where is a set, is a -algebra on and is a measure on .   If is a probability measure on then the triple is called a probability space .     Properties of Measures   Measures Preserve Order; Measure of Set Difference   Suppose is a measure space and such that . Then    . (Measures are monotone.)     provided that .       Note that we need the condition that to avoid getting an indeterminate form of .   We can rewrite as . Because this is a disjoint union it follows from the countable additivity of measures that .  Since , it follows that .  Also if then subtracting on both sides of the equation gives that .   The countable additivity property of measures only applies to disjoint unions; however, measures satisfy the countable subadditivity property on arbitrary countable unions.   Countable Subadditivity of Measures   Suppose is a measure space and are subsets in . Then      Let and for . Then the sequence , , is a distinct sequence of subsets whose union equals   Thus it follows from countable addivitity and monotonicity that     Measure of an Increasing Union   Suppose is a measure space and is an increasing sequence of sets in . Then      If for some then both sides of the above equation are equal to and theorem is true. Thus we may suppose that for all .  Our strategy is to rewrite the left hand side as a disjoint union so that we can apply countable additivity. Let . Then and the right side is a disjoint union.  Hence by countable additivity of measure,   It follows from the measure of set difference that    Measures also behave as expected with respect to decreasing intersections, provided that the sets under consideration have finite measures.   Measure of a Decreasing Intersection   Suppose is a measure space and is a decreasing sequence of sets in with . Then      Our strategy is to rewrite the left hand side as an increasing union so that we can apply the previous result. It follows from De Morgan's laws that   We note that is an increasing sequence of sets in .  Hence by our previous result,   Using the formula for the measure of set difference, we can rewrite this as and the theorem follows by subtracting from both sides and dividing by .    Measure of a Union   Suppose is a measure space and with . Then     If is a probability space and and are events, then the above equation is just the formula for the probability of a disjunction.   If and are mutually exclusive events (meaning ) then    Our strategy is to rewrite the left hand side as a disjoint union and apply countable additivity.   Since the right hand side is a disjoint union we have     "
},
{
  "id": "def-measure",
  "level": "2",
  "url": "notes-week-04.html#def-measure",
  "type": "Definition",
  "number": "35",
  "title": "Measure.",
  "body": " Measure   Suppose is a set and is a -algebra on . A on is a function such that and for every sequence of disjoint subsets of sets in .   "
},
{
  "id": "subsec-Definition-and-Examples-of-Measures-7",
  "level": "2",
  "url": "notes-week-04.html#subsec-Definition-and-Examples-of-Measures-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "probability measure "
},
{
  "id": "subsec-Definition-and-Examples-of-Measures-8",
  "level": "2",
  "url": "notes-week-04.html#subsec-Definition-and-Examples-of-Measures-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sample space event "
},
{
  "id": "subsec-Definition-and-Examples-of-Measures-9",
  "level": "2",
  "url": "notes-week-04.html#subsec-Definition-and-Examples-of-Measures-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "probability "
},
{
  "id": "def-measure-space",
  "level": "2",
  "url": "notes-week-04.html#def-measure-space",
  "type": "Definition",
  "number": "36",
  "title": "Measure Space.",
  "body": " Measure Space   A measure space is an ordered triple where is a set, is a -algebra on and is a measure on .   If is a probability measure on then the triple is called a probability space .  "
},
{
  "id": "thm-meas-prese-order",
  "level": "2",
  "url": "notes-week-04.html#thm-meas-prese-order",
  "type": "Theorem",
  "number": "37",
  "title": "Measures Preserve Order; Measure of Set Difference.",
  "body": " Measures Preserve Order; Measure of Set Difference   Suppose is a measure space and such that . Then    . (Measures are monotone.)     provided that .      "
},
{
  "id": "subsec-properties-measr-4",
  "level": "2",
  "url": "notes-week-04.html#subsec-properties-measr-4",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " We can rewrite as . Because this is a disjoint union it follows from the countable additivity of measures that .  Since , it follows that .  Also if then subtracting on both sides of the equation gives that .  "
},
{
  "id": "thm-count-subaditivity",
  "level": "2",
  "url": "notes-week-04.html#thm-count-subaditivity",
  "type": "Theorem",
  "number": "38",
  "title": "Countable Subadditivity of Measures.",
  "body": " Countable Subadditivity of Measures   Suppose is a measure space and are subsets in . Then    "
},
{
  "id": "subsec-properties-measr-7",
  "level": "2",
  "url": "notes-week-04.html#subsec-properties-measr-7",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": " Let and for . Then the sequence , , is a distinct sequence of subsets whose union equals   Thus it follows from countable addivitity and monotonicity that   "
},
{
  "id": "thm-meas-inc-union",
  "level": "2",
  "url": "notes-week-04.html#thm-meas-inc-union",
  "type": "Theorem",
  "number": "39",
  "title": "Measure of an Increasing Union.",
  "body": " Measure of an Increasing Union   Suppose is a measure space and is an increasing sequence of sets in . Then    "
},
{
  "id": "subsec-properties-measr-9",
  "level": "2",
  "url": "notes-week-04.html#subsec-properties-measr-9",
  "type": "Proof",
  "number": "3",
  "title": "",
  "body": " If for some then both sides of the above equation are equal to and theorem is true. Thus we may suppose that for all .  Our strategy is to rewrite the left hand side as a disjoint union so that we can apply countable additivity. Let . Then and the right side is a disjoint union.  Hence by countable additivity of measure,   It follows from the measure of set difference that   "
},
{
  "id": "thm-meas-decr-intersect",
  "level": "2",
  "url": "notes-week-04.html#thm-meas-decr-intersect",
  "type": "Theorem",
  "number": "40",
  "title": "Measure of a Decreasing Intersection.",
  "body": " Measure of a Decreasing Intersection   Suppose is a measure space and is a decreasing sequence of sets in with . Then    "
},
{
  "id": "subsec-properties-measr-12",
  "level": "2",
  "url": "notes-week-04.html#subsec-properties-measr-12",
  "type": "Proof",
  "number": "4",
  "title": "",
  "body": " Our strategy is to rewrite the left hand side as an increasing union so that we can apply the previous result. It follows from De Morgan's laws that   We note that is an increasing sequence of sets in .  Hence by our previous result,   Using the formula for the measure of set difference, we can rewrite this as and the theorem follows by subtracting from both sides and dividing by .  "
},
{
  "id": "thm-measure-union",
  "level": "2",
  "url": "notes-week-04.html#thm-measure-union",
  "type": "Theorem",
  "number": "41",
  "title": "Measure of a Union.",
  "body": " Measure of a Union   Suppose is a measure space and with . Then    "
},
{
  "id": "subsec-properties-measr-16",
  "level": "2",
  "url": "notes-week-04.html#subsec-properties-measr-16",
  "type": "Proof",
  "number": "5",
  "title": "",
  "body": " Our strategy is to rewrite the left hand side as a disjoint union and apply countable additivity.   Since the right hand side is a disjoint union we have   "
},
{
  "id": "notes-week-05",
  "level": "1",
  "url": "notes-week-05.html",
  "type": "Section",
  "number": "",
  "title": "Week 5: Lebesgue Measure (2D)",
  "body": " Week 5: Lebesgue Measure (2D)   Additivity of Outer Measure on Borel Sets  Recall that outer measure is not additive on all subsets of . This means that there exists disjoint subsets and of such that .  Thus outer measure defined on all subsets of is not actually a measure. However, we will show that outer measure is a bonafide measure when restricted to Borel subsets of .  This restricted outer measure, which is called Lebesgue measure, is the generalization of the concept of the length of an interval that we have been seeking.  We start our proof of the additivity of outer measure on Borel sets by showing that outer measure is additive when one of the sets is open.   Additivity of Outer Measure if One of the Sets is Open   Suppose and are disjoint subsets of and is open. Then .     If then both sides are equal, so we may suppose that .  By subadditivity of outer measure we know that . Hence we just need to prove the other direction.  First suppose that is the open interval with . We may also suppose that because removing two points from does not change its outer measure.  Recall that we defined the outer measure of a set by taking the infimum over all open covers of the set. So let be a sequence of open intervals whose union contains .  For each let , , and . Hence .  Since and are disjoint, is a sequence of open intervals that cover and is a sequence of open intervals that cover . Thus Thus and hence in this special case.  By Induction it follows that if is a union of finitely many disjoint intervals that are all disjoint from , then .  Finally suppose that is an arbitrary open set that is disjoint from . Then for some sequence of disjoint open intervals each of which is disjoint from .  Hence for each we have   Thus Thus and the proof is complete.   Next we show that outer measure is additive if one of the two sets is closed.   Additivity of Outer Measure if One of the Sets is Closed   Suppose and are disjoint subsets of and is closed. Then      Suppose is a sequence of open intervals whose union contains and let   Then is an open set and . Hence , which is open because it is an open set minus a closed set.  If we write as , then is a disjoint union in which one set is open. Hence the previous theorem applies and .  Moreover, . Hence   Since is a cover of it follows from taking the infimum over all such covers that   Since it follows from countable subadditivity that , we have that and the theorem is proven.   The Borel -algebra is the smallest -algebra that contains all the open sets. In general we cannot represent Borel sets by a finite combination of countable unions and intersections; however, we can nicely approximated Borel sets by closed sets.   Approximation of Borel Sets from Below by Closed Sets   Suppose is a Borel set. Then for every , there exists a closed set such that .     Let . Note that contains all closed subsets of . We will show that is a -algebra. Since is a -algebra that contains all closed subsets of it must also contain all the open subsets of and thus contains all Borel sets.  First, since is a closed set.  Before we prove that is closed under compliments, we will prove that is closed under countable intersections. Suppose that is a sequence of elements in . Let be arbitrary. Then for each , there exists a closed set such that   In addition   Hence by monotonicity and subadditivity   Thus . So is closed under countable intersections.  Now we want to show that is closed under compliments. That is, given we want to show that is also a subset of . First suppose that . Let be arbitrary. Then there exists a closed set such that . It follows from the definition of outer measure that there exists an open set such that and .  Then is a closed subset of and   Thus by subadditivity,   Since and these are disjoint sets with closed it follows from additivity of outer measure with one closed set that . Thus .  Thus   Since and these are disjoint sets with closed it follows from additivity of outer measure with one closed set that . Thus .  Hence   Since we have that and is closed, this means that .  For the case that , let . Then since is a closed set and belongs to and as a -algebra, is closed under finite intersections. Since and , it follows that .  Because it follows from De Morgan's Laws that   Since is closed under countable intersection, this implies that . Thus is closed under compliments.  Finally we show that is closed under countable unions. Let be a sequence of subsets in . Then it follows from DeMorgan's laws that   Since is closed under countable intersection, this implies that . Since is closed under compliments this means that . Thus is closed under countable unions and hence is a -algebra that contains all Borel subsets of .   Now we can prove that the outer measure is additive provided that one of the sets is a Borel set.   Additivity of Outer Measure if One Set is a Borel Set   Suppose that and are disjoint subsets of and is a Borel set. Then .     Let be arbitrary and let be a closed set such that and . Then it follows from monotonicity and additivity of outer measure when one set is closed that   Because this inequality holds for all we have that and hence .   As a corollary, we can show that there are subsets of that are not Borel sets.   Existence of a Subset of that is Not a Borel Set   There exists a subset of that is not a Borel set.     When we proved that outer measure is not additive in general, we constructed disjoint sets and with . By the previous theorem this means that neither nor can be Borel sets.   We can finally prove that outer measure restricted to Borel sets is a bonafide measure.   Outer Measure is a Measure on Borel Sets   Outer measure is a measure on where is the set of Borel subsets of .     We need to show that outer measure on Borel sets satisfies countable additivity. Let be a sequence of Borel sets. Then it follows from additivity of outer measure on Borel sets that   Thus by taking the limit as we have that   Since the other direction of the inequality follows from countable subadditivity we have that and thus outer measure on Borel sets is countably additive and hence is a measure.   We are now in position to define Lebesgue measure.   Lebesgue Measure    Lebesgue Measure is the measure on where is the -algebra of Borel subsets of , that assigns to each Borel set its outer measure.    Lebesgue measure is the same thing as outer measure except that it is only applied to Borel sets. Unlike outer measure, Lebesgue measure is truly a measure. We have shown that outer measure restricted to Borel sets is a bonafide measure; however, as it turns out we can do a little better. Outer measure is still a measure if restricted to a larger collection of functions called Lebesgue measurable sets.    Lebesgue Measurable Sets    A set is called Lebesgue measurable if there exists a Borel set such that .    Every Borel set is a Lebesgue measurable set; however, there are Lebesgue measurable sets that are not Borel sets, but it is rather difficult to come with up an example of one. However, it can be shown that the cardinality of the collection of Borel subsets of is equal to the cardinality of the real numbers, but the cardinality of the Lebesgue measurable sets is equal to the cardinality of the power set of the real numbers which is strictly greater. Thus there are vastly more Lebesgue measurable sets than Borel sets.   Equivalences for Being a Lebesgue Measurable Set   Suppose . Then the following are equivalent:    is Lebesgue measurable.    For every there exists a closed set with .    There exist closed sets contained in such that .    There exists a Borel set such that .    For every there exists an open set with .    There exist open sets containing such that     There exists a Borel set such that .        (d) is the definition of Lebesgue measure so clearly (a) and (d) are equivalent. Thus we can prove the Theorem by proving the following chain of implications: (b) implies (c) implies (d) implies implies (g) implies (b). Since a lot of these implications are similar, we will just show one of them. We will show that (b) implies (c).  Suppose that (b) is true; that is, for every there exists a closed set with .  Thus for each there exists a closed set with . Since for each it follows from subadditivity of outer measure that   Thus by letting we obtain that   Thus we have shown that (b) implies (c) in our chain of implications. The other implications are similarly proved.   Now we can show that outer measure restricted to Lebesgue measurable sets is still a measure.   Outer Measure is a Measure on Lebesgue Integrable Sets      The set of Lebesgue measurable subsets of is a -algebra on .    Outer measure is a measure on .        We already showed that is a -algebra so it remains to show that outer measure on is a measure. To do this we must show countable additivity of disjoint sets.  Let be a disjoint sequence of Lebesgue measurable sets. By the definition of Lebesgue measurable measurable sets, for each , there exists a Borel set such that .  Because outer measure on Borel sets is countably additive, we have that   Now it follows from the subadditivity of outer measure that since .  Since outer measure is monotone and , it follows that . Hence   By subadditivity of outer measure we have that and hence   Since outer measure is countably additive on Lebesgue measurable sets, outer measure restricted to Lebesgue measurable sets is a measure.   If is a set with outer measure , then must be a Lebesgue measurable set since is a Borel set and .  Thus the set of Lebesgue measurable sets is the smallest Borel algebra containing both all open subsets of and all subsets of with outer measure .  Because outer measure is not additive on all subsets of there are subsets of that are not Lebesgue measurable sets.   Lebesgue Measure    Lebesgue measure is the measure on where is the -algebra of Lebesgue measurable subsets of , that assigns to each Lebesgue measurable set its outer measure.    We have two different definitions for Lebesgue measure which only differ on the domain of the measure-- is it the -algebra of Borel sets or Lebesgue measurable sets?  Usually it doesn't matter whether you use Borel sets or Lebesgue measurable sets. I will specify whether Lebesgue measure refers to Borel sets or Lebesgue measurable sets, unless it is irrelevant.    The Cantor Set and Cantor Function  We might hope that Lebesgue measurable sets would behave nicely with respect to continuous functions; in other words, if is a Lebesgue measurable set and is a continuous function then would also be a Lebesgue measurable set.  Unfortunately, this is not the case as we will demonstrate by constructing a counterexample. For this we will need to use the Cantor set.  Recall that the Cantor set is constructed by starting with the interval and successively removing the middle thirds from each interval.   Cantor Set   The Cantor Set  is where and for is the union of the middle third open intervals in the intervals of .    The Cantor set can also be represented using Ternary (Base 3) expansions. In Ternary, place values represent powers of 3: threes, nines, twenty-sevens, , , .  Suppose a number has Ternary expansion . where , , or . The value of tells which third of the interval the point belongs to.  If , the point is in the left third of , if , the point is in the middle third of , and if , the point is in the right third of .  This means that any number whose Ternary expansion has belongs to the middle third interval and is removed in the first step of constructing the Cantor set.  Likewise the value of tells which third of the interval or the point belongs to, with corresponding to the middle third of that interval.  Thus any number whose Ternary expansion contains a in it will be in the middle third of some interval and will be removed in the construction of the Cantor set. Thus a point is in the Cantor set if and only if its Ternary expansion only contains the digits or .   Properties of the Cantor Set      The Cantor set is a closed subset of .    The Cantor set has Lebesgue measure .    The Cantor set contains no intervals with more than one element.        (a) The compliment of the Cantor set is a countable union of open intervals, so it is an open set. Thus the Cantor set must be closed.  (b) In MTH 527 we proved that the compliment of the Cantor set has length , hence it has Lebesgue measure and thus the Cantor set has Lebesgue measure .  (c) Since an interval with at least two elements has positive measure, it follows from (b) that the Cantor set can't contain intervals with more than one element.   We will refer to the following function several times throughout this course.   The Cantor Function   The Cantor function or Cantor-Lebesgue Function  is defined by converting base 3 representations into base 2 representations as follows.    If belongs to the Cantor set then is computed from the unique base 3 representation of consisting only of 's and 's by replacing all 's in the expansion by 's and interpreting the resulting string as a base 2 number.    If does not belong to the Cantor set, then is computed by truncating after the first , replacing each before the first with and interpreting the resulting string as a base 2 number.      As an example, suppose , which is an element of the Cantor set. Since , the base 3 representation of is . Hence .  For another example, suppose , which is also an element of the Cantor set. One base 3 representation of is , but we don't want to use this because it contains a . Instead we note that the infinite series . So another base 3 representation of is and this representation does not contain a . Hence .  For an example involving a number outside the Cantor set, suppose , which is not an element of the Cantor set since it is removed during the first iteration. Since , the base 3 representation of is . Since is not an element of the Cantor set, we truncate everything after the first to get . There are no 's to replace so we interpret this as the base number . Thus .  In fact, for every , . This is because the base 3 representation of every number in starts with and thus is truncated to , just like with .  As a final example, suppose . For every number in this interval the base 3 representation starts with . Truncating after the first gives and replacing the with a and interpreting the result as a base 2 number gives . Thus for every .   A graph of the Cantor Function.   A graph of a function that increases from top to bottom but which contains many intervals where the graph is constant giving the overall graph the appearance of a staircase with steps of various lengths. The x axis is labeled using multiples of 1\/9, while the y axis is labled with multiples of 1\/8 because the constant intervals on the graph have endpoints at multiples of 1\/9 on the x axis, while the value of the function on that interval is a multiple of 1\/8.     Properties of the Cantor Function   The Cantor function is a continuous, increasing function from onto . Furthermore , where denotes the Cantor set.     We'll first show that . To do this, let . Then has a base 2 representation consisting only of 's and 's. By replacing the 's with 's, we end up with a base 3 representation that consists only of 's and 's and thus represents an element of the Cantor set. If we denote this element by then . Thus and hence .  To show that the Cantor function is increasing, suppose and that has base 3 representation and has base 3 representation . Then at some point their base 3 representations first differ and . The only possibilities are that and or or that and . Either way, when the Cantor function is applied and 2's are replaced by 1's and hence , so the Cantor function is increasing.  To show that the Cantor function is continuous, we first recall that an increasing function can only have jump discontinuities. Thus if the Cantor function is discontinuous at then it must have a jump discontinuity there and hence But this means that the Cantor function fails to attain all values between and , which contradicts the fact that the range of the Cantor function is all . Thus the Cantor function must be continuous on .   We can use the Cantor function to give a short proof that the Cantor set is uncountable.   The Cantor Set is Uncountable   The Cantor set is uncountable.     If the Cantor set was countable then would also be countable since is a bijection from to , but since which is uncountable, the Cantor set must also be uncountable.   Lastly, we use the Cantor function to show that even a continuous function can map a set of measure to a non-measurable set.   Continuous Image of a Lebesgue Measurable Set Can Be Non-Measurable   There exists a Lebesgue measurable set such that and is not a measurable set.     Let be a non-measurable subset of and let . Then by monotonicity. Hence is a Lebesgue measurable set because every set with measure is Lebesgue measurable. Since , which is not a measurable set. Thus is a Lebesgue measurable set whose image under is not Lebesgue measurable.    "
},
{
  "id": "thm-Addivitity-outer-measure",
  "level": "2",
  "url": "notes-week-05.html#thm-Addivitity-outer-measure",
  "type": "Theorem",
  "number": "42",
  "title": "Additivity of Outer Measure if One of the Sets is Open.",
  "body": " Additivity of Outer Measure if One of the Sets is Open   Suppose and are disjoint subsets of and is open. Then .   "
},
{
  "id": "subsec-Additivity-of-Outer-7",
  "level": "2",
  "url": "notes-week-05.html#subsec-Additivity-of-Outer-7",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " If then both sides are equal, so we may suppose that .  By subadditivity of outer measure we know that . Hence we just need to prove the other direction.  First suppose that is the open interval with . We may also suppose that because removing two points from does not change its outer measure.  Recall that we defined the outer measure of a set by taking the infimum over all open covers of the set. So let be a sequence of open intervals whose union contains .  For each let , , and . Hence .  Since and are disjoint, is a sequence of open intervals that cover and is a sequence of open intervals that cover . Thus Thus and hence in this special case.  By Induction it follows that if is a union of finitely many disjoint intervals that are all disjoint from , then .  Finally suppose that is an arbitrary open set that is disjoint from . Then for some sequence of disjoint open intervals each of which is disjoint from .  Hence for each we have   Thus Thus and the proof is complete.  "
},
{
  "id": "thm-addivitity-when-closed",
  "level": "2",
  "url": "notes-week-05.html#thm-addivitity-when-closed",
  "type": "Theorem",
  "number": "43",
  "title": "Additivity of Outer Measure if One of the Sets is Closed.",
  "body": " Additivity of Outer Measure if One of the Sets is Closed   Suppose and are disjoint subsets of and is closed. Then    "
},
{
  "id": "subsec-Additivity-of-Outer-10",
  "level": "2",
  "url": "notes-week-05.html#subsec-Additivity-of-Outer-10",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": " Suppose is a sequence of open intervals whose union contains and let   Then is an open set and . Hence , which is open because it is an open set minus a closed set.  If we write as , then is a disjoint union in which one set is open. Hence the previous theorem applies and .  Moreover, . Hence   Since is a cover of it follows from taking the infimum over all such covers that   Since it follows from countable subadditivity that , we have that and the theorem is proven.  "
},
{
  "id": "thm-approximation-from-below",
  "level": "2",
  "url": "notes-week-05.html#thm-approximation-from-below",
  "type": "Theorem",
  "number": "44",
  "title": "Approximation of Borel Sets from Below by Closed Sets.",
  "body": " Approximation of Borel Sets from Below by Closed Sets   Suppose is a Borel set. Then for every , there exists a closed set such that .   "
},
{
  "id": "subsec-Additivity-of-Outer-13",
  "level": "2",
  "url": "notes-week-05.html#subsec-Additivity-of-Outer-13",
  "type": "Proof",
  "number": "3",
  "title": "",
  "body": " Let . Note that contains all closed subsets of . We will show that is a -algebra. Since is a -algebra that contains all closed subsets of it must also contain all the open subsets of and thus contains all Borel sets.  First, since is a closed set.  Before we prove that is closed under compliments, we will prove that is closed under countable intersections. Suppose that is a sequence of elements in . Let be arbitrary. Then for each , there exists a closed set such that   In addition   Hence by monotonicity and subadditivity   Thus . So is closed under countable intersections.  Now we want to show that is closed under compliments. That is, given we want to show that is also a subset of . First suppose that . Let be arbitrary. Then there exists a closed set such that . It follows from the definition of outer measure that there exists an open set such that and .  Then is a closed subset of and   Thus by subadditivity,   Since and these are disjoint sets with closed it follows from additivity of outer measure with one closed set that . Thus .  Thus   Since and these are disjoint sets with closed it follows from additivity of outer measure with one closed set that . Thus .  Hence   Since we have that and is closed, this means that .  For the case that , let . Then since is a closed set and belongs to and as a -algebra, is closed under finite intersections. Since and , it follows that .  Because it follows from De Morgan's Laws that   Since is closed under countable intersection, this implies that . Thus is closed under compliments.  Finally we show that is closed under countable unions. Let be a sequence of subsets in . Then it follows from DeMorgan's laws that   Since is closed under countable intersection, this implies that . Since is closed under compliments this means that . Thus is closed under countable unions and hence is a -algebra that contains all Borel subsets of .  "
},
{
  "id": "thm-additivity-outer-measure-Borel",
  "level": "2",
  "url": "notes-week-05.html#thm-additivity-outer-measure-Borel",
  "type": "Theorem",
  "number": "45",
  "title": "Additivity of Outer Measure if One Set is a Borel Set.",
  "body": " Additivity of Outer Measure if One Set is a Borel Set   Suppose that and are disjoint subsets of and is a Borel set. Then .   "
},
{
  "id": "subsec-Additivity-of-Outer-16",
  "level": "2",
  "url": "notes-week-05.html#subsec-Additivity-of-Outer-16",
  "type": "Proof",
  "number": "4",
  "title": "",
  "body": " Let be arbitrary and let be a closed set such that and . Then it follows from monotonicity and additivity of outer measure when one set is closed that   Because this inequality holds for all we have that and hence .  "
},
{
  "id": "cor-non-Borel-set",
  "level": "2",
  "url": "notes-week-05.html#cor-non-Borel-set",
  "type": "Corollary",
  "number": "46",
  "title": "Existence of a Subset of <span class=\"process-math\">\\(\\mathbf{R}\\)<\/span>that is Not a Borel Set.",
  "body": " Existence of a Subset of that is Not a Borel Set   There exists a subset of that is not a Borel set.   "
},
{
  "id": "subsec-Additivity-of-Outer-19",
  "level": "2",
  "url": "notes-week-05.html#subsec-Additivity-of-Outer-19",
  "type": "Proof",
  "number": "5",
  "title": "",
  "body": " When we proved that outer measure is not additive in general, we constructed disjoint sets and with . By the previous theorem this means that neither nor can be Borel sets.  "
},
{
  "id": "thm-outer-measure-is-measure-borel",
  "level": "2",
  "url": "notes-week-05.html#thm-outer-measure-is-measure-borel",
  "type": "Theorem",
  "number": "47",
  "title": "Outer Measure is a Measure on Borel Sets.",
  "body": " Outer Measure is a Measure on Borel Sets   Outer measure is a measure on where is the set of Borel subsets of .   "
},
{
  "id": "subsec-Additivity-of-Outer-22",
  "level": "2",
  "url": "notes-week-05.html#subsec-Additivity-of-Outer-22",
  "type": "Proof",
  "number": "6",
  "title": "",
  "body": " We need to show that outer measure on Borel sets satisfies countable additivity. Let be a sequence of Borel sets. Then it follows from additivity of outer measure on Borel sets that   Thus by taking the limit as we have that   Since the other direction of the inequality follows from countable subadditivity we have that and thus outer measure on Borel sets is countably additive and hence is a measure.  "
},
{
  "id": "def-lebesgue-measure",
  "level": "2",
  "url": "notes-week-05.html#def-lebesgue-measure",
  "type": "Definition",
  "number": "48",
  "title": "Lebesgue Measure.",
  "body": " Lebesgue Measure    Lebesgue Measure is the measure on where is the -algebra of Borel subsets of , that assigns to each Borel set its outer measure.   "
},
{
  "id": "def-lebesgue-measureable-set",
  "level": "2",
  "url": "notes-week-05.html#def-lebesgue-measureable-set",
  "type": "Definition",
  "number": "49",
  "title": "",
  "body": "  A set is called Lebesgue measurable if there exists a Borel set such that .   "
},
{
  "id": "thm-lebesgue-set-equiv",
  "level": "2",
  "url": "notes-week-05.html#thm-lebesgue-set-equiv",
  "type": "Theorem",
  "number": "50",
  "title": "Equivalences for Being a Lebesgue Measurable Set.",
  "body": " Equivalences for Being a Lebesgue Measurable Set   Suppose . Then the following are equivalent:    is Lebesgue measurable.    For every there exists a closed set with .    There exist closed sets contained in such that .    There exists a Borel set such that .    For every there exists an open set with .    There exist open sets containing such that     There exists a Borel set such that .      "
},
{
  "id": "subsec-Lebesgue-Measurable-Sets-5",
  "level": "2",
  "url": "notes-week-05.html#subsec-Lebesgue-Measurable-Sets-5",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " (d) is the definition of Lebesgue measure so clearly (a) and (d) are equivalent. Thus we can prove the Theorem by proving the following chain of implications: (b) implies (c) implies (d) implies implies (g) implies (b). Since a lot of these implications are similar, we will just show one of them. We will show that (b) implies (c).  Suppose that (b) is true; that is, for every there exists a closed set with .  Thus for each there exists a closed set with . Since for each it follows from subadditivity of outer measure that   Thus by letting we obtain that   Thus we have shown that (b) implies (c) in our chain of implications. The other implications are similarly proved.  "
},
{
  "id": "thm-outer-measure-is-measure-lebesgue",
  "level": "2",
  "url": "notes-week-05.html#thm-outer-measure-is-measure-lebesgue",
  "type": "Theorem",
  "number": "51",
  "title": "Outer Measure is a Measure on Lebesgue Integrable Sets.",
  "body": " Outer Measure is a Measure on Lebesgue Integrable Sets      The set of Lebesgue measurable subsets of is a -algebra on .    Outer measure is a measure on .      "
},
{
  "id": "subsec-Lebesgue-Measurable-Sets-8",
  "level": "2",
  "url": "notes-week-05.html#subsec-Lebesgue-Measurable-Sets-8",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": " We already showed that is a -algebra so it remains to show that outer measure on is a measure. To do this we must show countable additivity of disjoint sets.  Let be a disjoint sequence of Lebesgue measurable sets. By the definition of Lebesgue measurable measurable sets, for each , there exists a Borel set such that .  Because outer measure on Borel sets is countably additive, we have that   Now it follows from the subadditivity of outer measure that since .  Since outer measure is monotone and , it follows that . Hence   By subadditivity of outer measure we have that and hence   Since outer measure is countably additive on Lebesgue measurable sets, outer measure restricted to Lebesgue measurable sets is a measure.  "
},
{
  "id": "def-lebesgue-measure-2",
  "level": "2",
  "url": "notes-week-05.html#def-lebesgue-measure-2",
  "type": "Definition",
  "number": "52",
  "title": "Lebesgue Measure.",
  "body": " Lebesgue Measure    Lebesgue measure is the measure on where is the -algebra of Lebesgue measurable subsets of , that assigns to each Lebesgue measurable set its outer measure.   "
},
{
  "id": "def-Cantor-set",
  "level": "2",
  "url": "notes-week-05.html#def-Cantor-set",
  "type": "Definition",
  "number": "53",
  "title": "Cantor Set.",
  "body": " Cantor Set   The Cantor Set  is where and for is the union of the middle third open intervals in the intervals of .   "
},
{
  "id": "thm-Cantor-set-properties",
  "level": "2",
  "url": "notes-week-05.html#thm-Cantor-set-properties",
  "type": "Theorem",
  "number": "54",
  "title": "Properties of the Cantor Set.",
  "body": " Properties of the Cantor Set      The Cantor set is a closed subset of .    The Cantor set has Lebesgue measure .    The Cantor set contains no intervals with more than one element.      "
},
{
  "id": "subsec-Cantor-13",
  "level": "2",
  "url": "notes-week-05.html#subsec-Cantor-13",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " (a) The compliment of the Cantor set is a countable union of open intervals, so it is an open set. Thus the Cantor set must be closed.  (b) In MTH 527 we proved that the compliment of the Cantor set has length , hence it has Lebesgue measure and thus the Cantor set has Lebesgue measure .  (c) Since an interval with at least two elements has positive measure, it follows from (b) that the Cantor set can't contain intervals with more than one element.  "
},
{
  "id": "def-Cantor-Function",
  "level": "2",
  "url": "notes-week-05.html#def-Cantor-Function",
  "type": "Definition",
  "number": "55",
  "title": "The Cantor Function.",
  "body": " The Cantor Function   The Cantor function or Cantor-Lebesgue Function  is defined by converting base 3 representations into base 2 representations as follows.    If belongs to the Cantor set then is computed from the unique base 3 representation of consisting only of 's and 's by replacing all 's in the expansion by 's and interpreting the resulting string as a base 2 number.    If does not belong to the Cantor set, then is computed by truncating after the first , replacing each before the first with and interpreting the resulting string as a base 2 number.     "
},
{
  "id": "subsec-Cantor-21",
  "level": "2",
  "url": "notes-week-05.html#subsec-Cantor-21",
  "type": "Figure",
  "number": "56",
  "title": "",
  "body": " A graph of the Cantor Function.   A graph of a function that increases from top to bottom but which contains many intervals where the graph is constant giving the overall graph the appearance of a staircase with steps of various lengths. The x axis is labeled using multiples of 1\/9, while the y axis is labled with multiples of 1\/8 because the constant intervals on the graph have endpoints at multiples of 1\/9 on the x axis, while the value of the function on that interval is a multiple of 1\/8.   "
},
{
  "id": "thm-cantor-function-properties",
  "level": "2",
  "url": "notes-week-05.html#thm-cantor-function-properties",
  "type": "Theorem",
  "number": "57",
  "title": "Properties of the Cantor Function.",
  "body": " Properties of the Cantor Function   The Cantor function is a continuous, increasing function from onto . Furthermore , where denotes the Cantor set.   "
},
{
  "id": "subsec-Cantor-23",
  "level": "2",
  "url": "notes-week-05.html#subsec-Cantor-23",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": " We'll first show that . To do this, let . Then has a base 2 representation consisting only of 's and 's. By replacing the 's with 's, we end up with a base 3 representation that consists only of 's and 's and thus represents an element of the Cantor set. If we denote this element by then . Thus and hence .  To show that the Cantor function is increasing, suppose and that has base 3 representation and has base 3 representation . Then at some point their base 3 representations first differ and . The only possibilities are that and or or that and . Either way, when the Cantor function is applied and 2's are replaced by 1's and hence , so the Cantor function is increasing.  To show that the Cantor function is continuous, we first recall that an increasing function can only have jump discontinuities. Thus if the Cantor function is discontinuous at then it must have a jump discontinuity there and hence But this means that the Cantor function fails to attain all values between and , which contradicts the fact that the range of the Cantor function is all . Thus the Cantor function must be continuous on .  "
},
{
  "id": "thm-cantor-st-uncountable",
  "level": "2",
  "url": "notes-week-05.html#thm-cantor-st-uncountable",
  "type": "Theorem",
  "number": "58",
  "title": "The Cantor Set is Uncountable.",
  "body": " The Cantor Set is Uncountable   The Cantor set is uncountable.   "
},
{
  "id": "subsec-Cantor-26",
  "level": "2",
  "url": "notes-week-05.html#subsec-Cantor-26",
  "type": "Proof",
  "number": "3",
  "title": "",
  "body": " If the Cantor set was countable then would also be countable since is a bijection from to , but since which is uncountable, the Cantor set must also be uncountable.  "
},
{
  "id": "thm-continuous-image-non-measurable",
  "level": "2",
  "url": "notes-week-05.html#thm-continuous-image-non-measurable",
  "type": "Theorem",
  "number": "59",
  "title": "Continuous Image of a Lebesgue Measurable Set Can Be Non-Measurable.",
  "body": " Continuous Image of a Lebesgue Measurable Set Can Be Non-Measurable   There exists a Lebesgue measurable set such that and is not a measurable set.   "
},
{
  "id": "subsec-Cantor-29",
  "level": "2",
  "url": "notes-week-05.html#subsec-Cantor-29",
  "type": "Proof",
  "number": "4",
  "title": "",
  "body": " Let be a non-measurable subset of and let . Then by monotonicity. Hence is a Lebesgue measurable set because every set with measure is Lebesgue measurable. Since , which is not a measurable set. Thus is a Lebesgue measurable set whose image under is not Lebesgue measurable.  "
},
{
  "id": "notes-week-06",
  "level": "1",
  "url": "notes-week-06.html",
  "type": "Section",
  "number": "",
  "title": "Week 6: Convergence of Measurable Functions (2E)",
  "body": " Week 6: Convergence of Measurable Functions (2E)   Littlewood's Three Principles  Recall the definitions of pointwise and uniform convergence.   Pointwise and Uniform Convergence   Suppose is a set, are functions from to and is a function from to .    The sequence converges pointwise on to if for each . In other words, converges pointwise on to if for each and every there exists such that for all integers .    The sequence converges uniformly on to if for every there exists such that for all integers and all .      Example: Let on . Then converges pointwise to However, does not converge uniformly on .  The previous example shows that the pointwise limit of a sequence of continuous functions need not be continuous; however, the uniform limit of a sequence of continuous functions will always be continuous.   Uniform Limit of a Sequence of Continuous Function is Continuous   Suppose and is a sequence of functions from to . Suppose and is continuous at for each . Then is continuous at .    The following propositions are clearly false.    Every measurable set is a finite union of intervals.    Every measurable function is continuous.    Every pointwise convergent sequence is uniformly convergent.    However, it only takes a slight modification to change them into true statements. These are called Littlewood's Three Principles . The following are true statements.    Every measureable set is nearly a finite union of intervals.    Every measurable function is nearly continuous.    Every pointwise convergent sequence is nearly uniformly convergent.    Here nearly means that the statement holds outside a set with arbitrarily small measure.    Egorov's Theorem  We essentially proved (a) in our theorem of equivalences of being a Lebesgue measurable set. Next we will prove (c).   Egorov's Theorem   Suppose is a measure space with . Suppose is a sequence of -measurable functions from to that converges pointwise on to a function . Then for every there exists a set such that and converges uniformly to on .    Example: Consider the sequence , which is a sequence of Lebesgue measurable functions from to which converges pointwise to   Given , let . Then and converges uniformly to on .   Suppose and temporarily fix . Because converges pointwise to , we have that   For let   Because each is an -measurable function is an -measurable function. Hence each is an -measurable function and .  Since is an increasing sequence of sets and it follows that .  Thus there exists such that .  Now let . Then   To complete the proof, we need to show that the sequence converges to uniformly on . Suppose and let be such that . Then because we have that for all and . Hence converges uniformly to on .     Approximation by Simple Functions  The simplest function is a constant function, since it only attains a single value. The next simplest are functions that only attain a finite number of values.   Simple Function   A function is called simple if it takes on only a finite number of values.    Example: Dirichlet's function is a simple function since it only takes on 2 values.  Suppose is a measurable space, is a simple function and are the distinct nonzero values of . Then where . This function is an -measurable function if and only if all .   Approximation by Simple Functions   Suppose is a measurable space and is -measurable. Then there exists a sequence of functions from to such that   Each is a simple -measurable function.     for all and .     for every .     converges uniformly to if is bounded.        Define by   In other words, we divide into equally spaced subintervals. If we define to be the left endpoint of the subinterval it's in and if we define to be the right endpoint of the subintervals it's in. If then we define .  For each , only attains a finite number of values, so it is a simple function. Moreover, because is an -measurable function .  Thus for each  is a Borel set and thus is also an -measurable function, proving (a). Also (b) holds because of how we define . For example if and is in and also in , then .  It follows from how we defined that for all such that . Hence for each , . Thus (c) is proved.  Finally if is bounded then there exists some such that for all  and thus the previous limit gives that converges uniformly to , proving (d).     Luzin's Theorem  Now we will prove the second of Littlewood's Three Principles.   Luzin's Theorem   Suppose is a Borel Measurable function. Then for every there exists a closed set such that and is a continuous function on .    Note that Luzin's Theorem does not say that is continuous on , only that is continuous on . For example, Dirichlet's function is nowhere continuous on . Let and let be an open cover of with . Let . Then is a closed set and . Since on , is a continuous function on .   We will build up the proof through a series of special cases. First consider the case that is a simple function. Recall that this means that can be written as where are distinct nonzero real numbers and are disjoint Borel sets.  Suppose . Then for each there exists a closed set and an open set such that   Because , we have that for each . Now let   Since is a finite union of closed sets, is closed. Moverover, and hence . Thus it remains to show that is a continuous function on .  Because it follows that on . Thus is continuous on for all . In addition, since it follows that on this set, and hence is continuous here as well. Thus is continuous on and the theorem is proven for simple functions.  Now suppose that is an arbitrary Borel function. Then there is a sequence of simple Borel measurable functions that converges to . Suppose . Then by the special case we just proved, for each there exists a closed set such that and is continuous on .  Let Then is a closed set and is continuous on for all . Note that Hence   For each the sequence converges pointwise on to . Thus by Egorov's Theorem for each there is a Borel set such that converges uniformly to and   Hence converges uniformly to on for each . Since each is continuous it follows that is continuous on for each . Thus is continuous, where   Now Hence Hence .  Since is a Borel set, we can approximate it from below by closed sets. This means there exists a closed set such that and .  Hence   Thus is a closed set with . Moreover, since a continuous function is still continuous when restricted to a smaller set, is continuous on , which completes the proof.   There is another version of Luzin's Theorem which is sometimes more useful.   Luzin's Theorem, Second Version   Suppose and is a Borel measurable function. Then for every there exists a closed set and a continuous function such that and .    See the textbook for the proof    Lebesgue Measurable Functions   Lebesgue Measurable Function   A function is called Lebesgue measurable if is a Lebesgue measurable set for every Borel set in .    Recall that a Lebesgue measurable set differs from a Borel set by a set with outer measure . Likewise we expect that every Lebesgue measurable function is nearly a Borel measurable function.   Every Lebesgue Measurable Function is Almost Borel Measurable   Suppose is a Lebesgue measurable function. Then there exists a Borel measurable function such that      There exists a sequence of Lebesgue measurable simple functions that converges pointwise to . This means that for each , there exists and disjoint Lebesgue measurable sets such that   We now approximate these Lebesgue measurable sets by Borel sets. For each there exists a Borel set such that . Let Then is a Borel measurable function and .  We will show that the sequence converges to the Borel measurable function that we want. If , then for all and hence .  Let . It follows from an exercise in the book (#14 b in Section 2B) that is a Borel subset of . Also,   Since is contained in a countable union of sets with measure , it follows that .  Let . If , then the limit exists because of how we defined , and if , then and the limit is and hence exists. So is well defined. Since the product of Borel measurable functions is a Borel measurable function it follows that for each , is a Borel measurable function. Since the pointwise limit of a sequence of Borel measurable functions is Borel measurable, it follows that is a Borel measurable function.  Finally, Thus is contained in a countable union of sets with measure and thus . Thus is a Borel measurable function with , which completes the proof.    "
},
{
  "id": "def-pointwise-convergence",
  "level": "2",
  "url": "notes-week-06.html#def-pointwise-convergence",
  "type": "Definition",
  "number": "60",
  "title": "Pointwise and Uniform Convergence.",
  "body": " Pointwise and Uniform Convergence   Suppose is a set, are functions from to and is a function from to .    The sequence converges pointwise on to if for each . In other words, converges pointwise on to if for each and every there exists such that for all integers .    The sequence converges uniformly on to if for every there exists such that for all integers and all .     "
},
{
  "id": "thm-unfiform-limit-continuous",
  "level": "2",
  "url": "notes-week-06.html#thm-unfiform-limit-continuous",
  "type": "Theorem",
  "number": "61",
  "title": "Uniform Limit of a Sequence of Continuous Function is Continuous.",
  "body": " Uniform Limit of a Sequence of Continuous Function is Continuous   Suppose and is a sequence of functions from to . Suppose and is continuous at for each . Then is continuous at .   "
},
{
  "id": "subsec-Littlewood-9",
  "level": "2",
  "url": "notes-week-06.html#subsec-Littlewood-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Littlewood's Three Principles "
},
{
  "id": "thm-Egorov",
  "level": "2",
  "url": "notes-week-06.html#thm-Egorov",
  "type": "Theorem",
  "number": "62",
  "title": "Egorov’s Theorem.",
  "body": " Egorov's Theorem   Suppose is a measure space with . Suppose is a sequence of -measurable functions from to that converges pointwise on to a function . Then for every there exists a set such that and converges uniformly to on .   "
},
{
  "id": "subsec-Egorov-6",
  "level": "2",
  "url": "notes-week-06.html#subsec-Egorov-6",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Suppose and temporarily fix . Because converges pointwise to , we have that   For let   Because each is an -measurable function is an -measurable function. Hence each is an -measurable function and .  Since is an increasing sequence of sets and it follows that .  Thus there exists such that .  Now let . Then   To complete the proof, we need to show that the sequence converges to uniformly on . Suppose and let be such that . Then because we have that for all and . Hence converges uniformly to on .  "
},
{
  "id": "def-simple-function",
  "level": "2",
  "url": "notes-week-06.html#def-simple-function",
  "type": "Definition",
  "number": "63",
  "title": "Simple Function.",
  "body": " Simple Function   A function is called simple if it takes on only a finite number of values.   "
},
{
  "id": "thm-approximation-simple-functions",
  "level": "2",
  "url": "notes-week-06.html#thm-approximation-simple-functions",
  "type": "Theorem",
  "number": "64",
  "title": "Approximation by Simple Functions.",
  "body": " Approximation by Simple Functions   Suppose is a measurable space and is -measurable. Then there exists a sequence of functions from to such that   Each is a simple -measurable function.     for all and .     for every .     converges uniformly to if is bounded.      "
},
{
  "id": "subsec-simple-functions-7",
  "level": "2",
  "url": "notes-week-06.html#subsec-simple-functions-7",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Define by   In other words, we divide into equally spaced subintervals. If we define to be the left endpoint of the subinterval it's in and if we define to be the right endpoint of the subintervals it's in. If then we define .  For each , only attains a finite number of values, so it is a simple function. Moreover, because is an -measurable function .  Thus for each  is a Borel set and thus is also an -measurable function, proving (a). Also (b) holds because of how we define . For example if and is in and also in , then .  It follows from how we defined that for all such that . Hence for each , . Thus (c) is proved.  Finally if is bounded then there exists some such that for all  and thus the previous limit gives that converges uniformly to , proving (d).  "
},
{
  "id": "thm-luzin",
  "level": "2",
  "url": "notes-week-06.html#thm-luzin",
  "type": "Theorem",
  "number": "65",
  "title": "Luzin’s Theorem.",
  "body": " Luzin's Theorem   Suppose is a Borel Measurable function. Then for every there exists a closed set such that and is a continuous function on .   "
},
{
  "id": "subsec-Luzin-5",
  "level": "2",
  "url": "notes-week-06.html#subsec-Luzin-5",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " We will build up the proof through a series of special cases. First consider the case that is a simple function. Recall that this means that can be written as where are distinct nonzero real numbers and are disjoint Borel sets.  Suppose . Then for each there exists a closed set and an open set such that   Because , we have that for each . Now let   Since is a finite union of closed sets, is closed. Moverover, and hence . Thus it remains to show that is a continuous function on .  Because it follows that on . Thus is continuous on for all . In addition, since it follows that on this set, and hence is continuous here as well. Thus is continuous on and the theorem is proven for simple functions.  Now suppose that is an arbitrary Borel function. Then there is a sequence of simple Borel measurable functions that converges to . Suppose . Then by the special case we just proved, for each there exists a closed set such that and is continuous on .  Let Then is a closed set and is continuous on for all . Note that Hence   For each the sequence converges pointwise on to . Thus by Egorov's Theorem for each there is a Borel set such that converges uniformly to and   Hence converges uniformly to on for each . Since each is continuous it follows that is continuous on for each . Thus is continuous, where   Now Hence Hence .  Since is a Borel set, we can approximate it from below by closed sets. This means there exists a closed set such that and .  Hence   Thus is a closed set with . Moreover, since a continuous function is still continuous when restricted to a smaller set, is continuous on , which completes the proof.  "
},
{
  "id": "thm-luzin-2",
  "level": "2",
  "url": "notes-week-06.html#thm-luzin-2",
  "type": "Theorem",
  "number": "66",
  "title": "Luzin’s Theorem, Second Version.",
  "body": " Luzin's Theorem, Second Version   Suppose and is a Borel measurable function. Then for every there exists a closed set and a continuous function such that and .   "
},
{
  "id": "def-Lebesgue-measurable-function",
  "level": "2",
  "url": "notes-week-06.html#def-Lebesgue-measurable-function",
  "type": "Definition",
  "number": "67",
  "title": "Lebesgue Measurable Function.",
  "body": " Lebesgue Measurable Function   A function is called Lebesgue measurable if is a Lebesgue measurable set for every Borel set in .   "
},
{
  "id": "thm-lebesgue-meas-funct",
  "level": "2",
  "url": "notes-week-06.html#thm-lebesgue-meas-funct",
  "type": "Theorem",
  "number": "68",
  "title": "Every Lebesgue Measurable Function is Almost Borel Measurable.",
  "body": " Every Lebesgue Measurable Function is Almost Borel Measurable   Suppose is a Lebesgue measurable function. Then there exists a Borel measurable function such that    "
},
{
  "id": "subsec-Lebesgue-Measurable-Functions-5",
  "level": "2",
  "url": "notes-week-06.html#subsec-Lebesgue-Measurable-Functions-5",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " There exists a sequence of Lebesgue measurable simple functions that converges pointwise to . This means that for each , there exists and disjoint Lebesgue measurable sets such that   We now approximate these Lebesgue measurable sets by Borel sets. For each there exists a Borel set such that . Let Then is a Borel measurable function and .  We will show that the sequence converges to the Borel measurable function that we want. If , then for all and hence .  Let . It follows from an exercise in the book (#14 b in Section 2B) that is a Borel subset of . Also,   Since is contained in a countable union of sets with measure , it follows that .  Let . If , then the limit exists because of how we defined , and if , then and the limit is and hence exists. So is well defined. Since the product of Borel measurable functions is a Borel measurable function it follows that for each , is a Borel measurable function. Since the pointwise limit of a sequence of Borel measurable functions is Borel measurable, it follows that is a Borel measurable function.  Finally, Thus is contained in a countable union of sets with measure and thus . Thus is a Borel measurable function with , which completes the proof.  "
},
{
  "id": "homework-2",
  "level": "1",
  "url": "homework-2.html",
  "type": "Worksheet",
  "number": "",
  "title": "Homework 1 (Due August 27)",
  "body": " Homework 1 (Due August 27)    Instructions: Complete all the exercises below and submit your work by the due date.      Define by Explain why is not Riemann integrable on .      Suppose . Define by Prove that is Riemann integrable on and       For each , define by      Show that for each the sequence converges pointwise to as .    Show that for all . (This shows that in general .)        "
},
{
  "id": "homework-2-3-1",
  "level": "2",
  "url": "homework-2.html#homework-2-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Define by Explain why is not Riemann integrable on .   "
},
{
  "id": "homework-2-3-2",
  "level": "2",
  "url": "homework-2.html#homework-2-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Suppose . Define by Prove that is Riemann integrable on and    "
},
{
  "id": "homework-2-3-3",
  "level": "2",
  "url": "homework-2.html#homework-2-3-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  For each , define by      Show that for each the sequence converges pointwise to as .    Show that for all . (This shows that in general .)      "
},
{
  "id": "homework-3",
  "level": "1",
  "url": "homework-3.html",
  "type": "Worksheet",
  "number": "",
  "title": "Homework 2 (Due September 3)",
  "body": " Homework 2 (Due September 3)    Instructions: Complete all the exercises below and submit your work by the due date.      Suppose that and are subsets of and . Show that .      Prove that if and , then .      Suppose are real numbers with and . Show that if and only if .      Prove that .      Suppose that and . Let . Show that .     "
},
{
  "id": "homework-3-3-1",
  "level": "2",
  "url": "homework-3.html#homework-3-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Suppose that and are subsets of and . Show that .   "
},
{
  "id": "homework-3-3-2",
  "level": "2",
  "url": "homework-3.html#homework-3-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Prove that if and , then .   "
},
{
  "id": "homework-3-3-3",
  "level": "2",
  "url": "homework-3.html#homework-3-3-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Suppose are real numbers with and . Show that if and only if .   "
},
{
  "id": "homework-3-3-4",
  "level": "2",
  "url": "homework-3.html#homework-3-3-4",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Prove that .   "
},
{
  "id": "homework-3-3-5",
  "level": "2",
  "url": "homework-3.html#homework-3-3-5",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Suppose that and . Let . Show that .   "
},
{
  "id": "homework-4",
  "level": "1",
  "url": "homework-4.html",
  "type": "Worksheet",
  "number": "",
  "title": "Homework 3 (Due September 10)",
  "body": " Homework 3 (Due September 10)    Instructions: Complete all the exercises below and submit your work by the due date.      Prove that if and then and .      Suppose is a set and . Show that the collection is a -algebra on .      Show that is a -algebra on .      Suppose that is the smallest -algebra on containing . Show that is the collection of Borel subsets of .      Suppose is a set and and are -algebras on . Let ; that is, is the collection of subsets of that belong to either or . Is a -algebra? Provide a proof or a counterexample to support your answer.     "
},
{
  "id": "homework-4-3-1",
  "level": "2",
  "url": "homework-4.html#homework-4-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Prove that if and then and .   "
},
{
  "id": "homework-4-3-2",
  "level": "2",
  "url": "homework-4.html#homework-4-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Suppose is a set and . Show that the collection is a -algebra on .   "
},
{
  "id": "homework-4-3-3",
  "level": "2",
  "url": "homework-4.html#homework-4-3-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Show that is a -algebra on .   "
},
{
  "id": "homework-4-3-4",
  "level": "2",
  "url": "homework-4.html#homework-4-3-4",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Suppose that is the smallest -algebra on containing . Show that is the collection of Borel subsets of .   "
},
{
  "id": "homework-4-3-5",
  "level": "2",
  "url": "homework-4.html#homework-4-3-5",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Suppose is a set and and are -algebras on . Let ; that is, is the collection of subsets of that belong to either or . Is a -algebra? Provide a proof or a counterexample to support your answer.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
